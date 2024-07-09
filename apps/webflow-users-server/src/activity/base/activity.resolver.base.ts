/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Activity } from "./Activity";
import { ActivityCountArgs } from "./ActivityCountArgs";
import { ActivityFindManyArgs } from "./ActivityFindManyArgs";
import { ActivityFindUniqueArgs } from "./ActivityFindUniqueArgs";
import { DeleteActivityArgs } from "./DeleteActivityArgs";
import { ActivityService } from "../activity.service";
@graphql.Resolver(() => Activity)
export class ActivityResolverBase {
  constructor(protected readonly service: ActivityService) {}

  async _activitiesMeta(
    @graphql.Args() args: ActivityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Activity])
  async activities(
    @graphql.Args() args: ActivityFindManyArgs
  ): Promise<Activity[]> {
    return this.service.activities(args);
  }

  @graphql.Query(() => Activity, { nullable: true })
  async activity(
    @graphql.Args() args: ActivityFindUniqueArgs
  ): Promise<Activity | null> {
    const result = await this.service.activity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Activity)
  async deleteActivity(
    @graphql.Args() args: DeleteActivityArgs
  ): Promise<Activity | null> {
    try {
      return await this.service.deleteActivity(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
