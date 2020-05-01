/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BlogModel, BlogModelType } from "./BlogModel"
import { BlogModelSelector } from "./BlogModel.base"
import { ModelCommentConnectionModel, ModelCommentConnectionModelType } from "./ModelCommentConnectionModel"
import { ModelCommentConnectionModelSelector } from "./ModelCommentConnectionModel.base"
import { RootStoreType } from "./RootStore"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  blog: BlogModelType;
}

/**
 * PostBase
 * auto generated base class for the model PostModel.
 */
export const PostModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Post')
  .props({
    __typename: types.optional(types.literal("Post"), "Post"),
    id: types.identifier,
    title: types.union(types.undefined, types.string),
    blogID: types.string,
    blog: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => BlogModel))),
    comments: types.union(types.undefined, types.null, types.late((): any => ModelCommentConnectionModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PostModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get blogID() { return this.__attr(`blogID`) }
  blog(builder?: string | BlogModelSelector | ((selector: BlogModelSelector) => BlogModelSelector)) { return this.__child(`blog`, BlogModelSelector, builder) }
  comments(builder?: string | ModelCommentConnectionModelSelector | ((selector: ModelCommentConnectionModelSelector) => ModelCommentConnectionModelSelector)) { return this.__child(`comments`, ModelCommentConnectionModelSelector, builder) }
}
export function selectFromPost() {
  return new PostModelSelector()
}

export const postModelPrimitives = selectFromPost().title.blogID
