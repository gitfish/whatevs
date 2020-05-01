/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BlogModel, BlogModelType } from "./BlogModel"
import { BlogModelSelector } from "./BlogModel.base"
import { RootStoreType } from "./RootStore"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  items: IObservableArray<BlogModelType>;
}

/**
 * ModelBlogConnectionBase
 * auto generated base class for the model ModelBlogConnectionModel.
 */
export const ModelBlogConnectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ModelBlogConnection')
  .props({
    __typename: types.optional(types.literal("ModelBlogConnection"), "ModelBlogConnection"),
    items: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => BlogModel))))),
    nextToken: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ModelBlogConnectionModelSelector extends QueryBuilder {
  get nextToken() { return this.__attr(`nextToken`) }
  items(builder?: string | BlogModelSelector | ((selector: BlogModelSelector) => BlogModelSelector)) { return this.__child(`items`, BlogModelSelector, builder) }
}
export function selectFromModelBlogConnection() {
  return new ModelBlogConnectionModelSelector()
}

export const modelBlogConnectionModelPrimitives = selectFromModelBlogConnection().nextToken
