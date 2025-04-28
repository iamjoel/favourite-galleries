import { ImageInGallery } from "../../types"
import nature from "./nature"
import people from "./people"
import architecture from "./architecture"
import entertainment from "./entertainment"

const imgs: Record<string, ImageInGallery[]> = {
  nature,
  people,
  architecture,
  entertainment,
}

export default imgs