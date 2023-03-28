interface Meta {
  title: string;
  tag: string[];
}

export enum Tag {
  Apple = "apple",
  Banana = "banana",
  Mango = "mango",
}

export const map: Map<string, Meta> = new Map([
  ["post1", { title: "Title of post1", tag: [Tag.Apple, Tag.Banana] }],
  ["post2", { title: "Title of post2", tag: [Tag.Apple, Tag.Mango] }],
  ["post3", { title: "Title of post3", tag: [Tag.Apple, Tag.Mango] }],
]);
