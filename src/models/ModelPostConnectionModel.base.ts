/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PostModel, PostModelType } from "./PostModel"
import { PostModelSelector } from "./PostModel.base"
import { RootStoreType } from "./RootStore"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  items: IObservableArray<PostModelType>;
}

/**
 * ModelPostConnectionBase
 * auto generated base class for the model ModelPostConnectionModel.
 */
export const ModelPostConnectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ModelPostConnection')
  .props({
    __typename: types.optional(types.literal("ModelPostConnection"), "ModelPostConnection"),
    items: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PostModel))))),
    nextToken: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ModelPostConnectionModelSelector extends QueryBuilder {
  get nextToken() { return this.__attr(`nextToken`) }
  items(builder?: string | PostModelSelector | ((selector: PostModelSelector) => PostModelSelector)) { return this.__child(`items`, PostModelSelector, builder) }
}
export function selectFromModelPostConnection() {
  return new ModelPostConnectionModelSelector()
}

export const modelPostConnectionModelPrimitives = selectFromModelPostConnection().nextToken
