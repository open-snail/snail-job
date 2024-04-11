package com.aizuda.easy.retry.client.common.netty.server;

import com.aizuda.easy.retry.client.common.Lifecycle;
import com.aizuda.easy.retry.client.common.config.EasyRetryProperties;
import com.aizuda.easy.retry.client.common.exception.EasyRetryClientException;
import com.aizuda.easy.retry.common.log.EasyRetryLog;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * netty server
 *
 * @author: www.byteblogs.com
 * @date : 2022-03-07 15:54
 * @since 1.0.0
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
@RequiredArgsConstructor
@Getter
public class NettyHttpServer implements Runnable, Lifecycle {
    private final EasyRetryProperties easyRetryProperties;
    private Thread thread = null;
    private volatile boolean started = false;

    @Override
    public void run()  {
        // 防止重复启动
        if (started) {
            return;
        }

        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();

        try {
            // start server
            ServerBootstrap bootstrap = new ServerBootstrap();
            bootstrap.group(bossGroup, workerGroup)
                .channel(NioServerSocketChannel.class)
                .option(ChannelOption.SO_BACKLOG, 128)
                .childOption(ChannelOption.SO_KEEPALIVE, true)
                .childHandler(new ChannelInitializer<SocketChannel>() {
                    @Override
                    public void initChannel(SocketChannel channel) throws Exception {
                        channel.pipeline()
                            .addLast(new HttpServerCodec())
                            .addLast(new HttpObjectAggregator(5 * 1024 * 1024))
                            .addLast(new NettyHttpServerHandler());
                    }
                });

            // 在特定端口绑定并启动服务器 默认是1789
            ChannelFuture future = bootstrap.bind(easyRetryProperties.getPort()).sync();

            EasyRetryLog.LOCAL.info("------> easy-retry client remoting server start success, nettype = {}, port = {}",
                NettyHttpServer.class.getName(), easyRetryProperties.getPort());

            started = true;
            future.channel().closeFuture().sync();

        } catch (InterruptedException e) {
            EasyRetryLog.LOCAL.info("--------> easy-retry client remoting server stop.");
        } catch (Exception e) {
            EasyRetryLog.LOCAL.error("--------> easy-retry client remoting server error.", e);
            started = false;
            throw new EasyRetryClientException("easy-retry client server start error");
        } finally {
            // 当服务器正常关闭时，关闭EventLoopGroups以释放资源。
            workerGroup.shutdownGracefully();
            bossGroup.shutdownGracefully();
        }
    }

    @Override
    public void start()  {
        thread = new Thread(this);
        thread.setDaemon(true);
        thread.start();
    }

    @Override
    public void close() {
        if (thread != null && thread.isAlive()) {
            thread.interrupt();
        }
    }
}