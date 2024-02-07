import { Assets } from "pixi.js";

import appTextures, { allTexturesKeys } from "./textures";

//Превращяем объект с путями в массив
Object.entries(appTextures).forEach(([key, value]) => {
  Assets.add(key, value);
});

const textures = new Map(); //кеш texture

export const loadAssets = (onProgress) => {
  const keys = Object.entries(allTexturesKeys).map(([key, value]) => value);
  Assets.load([...keys], onProgress).then((data) => {
    Object.entries(data).forEach(([key, value]) => {
      textures.set(key, value);
    });
    onProgress("all");
  });
};

export const getTextures = (id) => {
  if (textures.has(id)) {
    return textures.get(id);
  }
  return null;
};
