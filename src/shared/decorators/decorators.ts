import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Response } from 'express';
import { User } from '../../../generated/prisma-client';
import { GqlExecutionContext } from '@nestjs/graphql';

export const ResGql = createParamDecorator(
  (data, [root, args, ctx, info]): Response => ctx.res,
);

export const GqlUser = createParamDecorator(
  (data, [root, args, ctx, info]): User => ctx.req && ctx.req.user,
);