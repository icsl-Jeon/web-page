interface Meta {
  title: string;
  tag: string[];
}

export enum Tag {
  Apple = "Apple",
  Banana = "Banana",
  Mango = "Mango",
}

export const map: Map<string, Meta> = new Map([
  ["post1", { title: "title of post1", tag: [Tag.Apple, Tag.Banana] }],
  ["post2", { title: "title of post2", tag: [Tag.Apple, Tag.Mango] }],
]);
