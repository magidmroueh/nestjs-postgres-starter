import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Response } from 'express';
import { User } from '../../../generated/prisma-client';
import { GqlExecutionContext } from '@nestjs/graphql';

//TODO: check why this is not working.
// export const ResGql = createParamDecorator(
//   (data, [root, args, ctx, info]): Response => ctx.res,
// );

export const ResGql = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    GqlExecutionContext.create(ctx).getContext().res,
);

export const GqlUser = createParamDecorator(
  (data, [root, args, ctx, info]): User => ctx.req && ctx.req.user,
);