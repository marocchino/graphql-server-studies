import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { articlesResolver } from './articles.resolver';
import { articlesService } from './articles.service';

@Module({
  providers: [articlesResolver, articlesService, DateScalar],
})
export class articlesModule {}