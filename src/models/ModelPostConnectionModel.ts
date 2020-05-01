import { Instance } from "mobx-state-tree"
import { ModelPostConnectionModelBase } from "./ModelPostConnectionModel.base"

/* The TypeScript type of an instance of ModelPostConnectionModel */
export interface ModelPostConnectionModelType extends Instance<typeof ModelPostConnectionModel.Type> {}

/* A graphql query fragment builders for ModelPostConnectionModel */
export { selectFromModelPostConnection, modelPostConnectionModelPrimitives, ModelPostConnectionModelSelector } from "./ModelPostConnectionModel.base"

/**
 * ModelPostConnectionModel
 */
export const ModelPostConnectionModel = ModelPostConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
