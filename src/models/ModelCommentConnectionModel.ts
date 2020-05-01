import { Instance } from "mobx-state-tree"
import { ModelCommentConnectionModelBase } from "./ModelCommentConnectionModel.base"

/* The TypeScript type of an instance of ModelCommentConnectionModel */
export interface ModelCommentConnectionModelType extends Instance<typeof ModelCommentConnectionModel.Type> {}

/* A graphql query fragment builders for ModelCommentConnectionModel */
export { selectFromModelCommentConnection, modelCommentConnectionModelPrimitives, ModelCommentConnectionModelSelector } from "./ModelCommentConnectionModel.base"

/**
 * ModelCommentConnectionModel
 */
export const ModelCommentConnectionModel = ModelCommentConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
