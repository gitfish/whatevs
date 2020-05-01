/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PostModel, PostModelType } from "./PostModel"
import { PostModelSelector } from "./PostModel.base"
import { RootStoreType } from "./RootStore"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  post: PostModelType;
}

/**
 * CommentBase
 * auto generated base class for the model CommentModel.
 */
export const CommentModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Comment')
  .props({
    __typename: types.optional(types.literal("Comment"), "Comment"),
    id: types.identifier,
    postID: types.string,
    post: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PostModel))),
    content: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CommentModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get postID() { return this.__attr(`postID`) }
  get content() { return this.__attr(`content`) }
  post(builder?: string | PostModelSelector | ((selector: PostModelSelector) => PostModelSelector)) { return this.__child(`post`, PostModelSelector, builder) }
}
export function selectFromComment() {
  return new CommentModelSelector()
}

export const commentModelPrimitives = selectFromComment().postID.content
