/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CommentModel, CommentModelType } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { RootStoreType } from "./RootStore"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  items: IObservableArray<CommentModelType>;
}

/**
 * ModelCommentConnectionBase
 * auto generated base class for the model ModelCommentConnectionModel.
 */
export const ModelCommentConnectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ModelCommentConnection')
  .props({
    __typename: types.optional(types.literal("ModelCommentConnection"), "ModelCommentConnection"),
    items: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CommentModel))))),
    nextToken: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ModelCommentConnectionModelSelector extends QueryBuilder {
  get nextToken() { return this.__attr(`nextToken`) }
  items(builder?: string | CommentModelSelector | ((selector: CommentModelSelector) => CommentModelSelector)) { return this.__child(`items`, CommentModelSelector, builder) }
}
export function selectFromModelCommentConnection() {
  return new ModelCommentConnectionModelSelector()
}

export const modelCommentConnectionModelPrimitives = selectFromModelCommentConnection().nextToken
