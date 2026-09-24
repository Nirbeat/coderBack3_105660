import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = Router();

router.use(
  '/pokeapi',
  createProxyMiddleware({
    target: 'https://pokeapi.co/api/v2/',
    changeOrigin: true,
    pathRewrite: {
      '^/pokeapi': '',
    },
  }),
);

export default router;
