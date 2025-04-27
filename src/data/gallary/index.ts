import { ImageInGallery } from "../../types"
import nature from "./nature"
import people from "./people"
import architecture from "./architecture"

const imgs: Record<string, ImageInGallery[]> = {
  nature,
  people,
  architecture,
}

export default imgs