interface Meta {
  title: string;
  tag: string[];
  date: string;
}

export enum Tag {
  TargetChasing = "target-chasing",
  Prediction = "prediction",
  CHOMP = "chomp",
  VisibilityMetric = "visibility-metric",
  OutdoorFlight = "outdoor-flight",
  ROS2 = "ros2",
}

export const map: Map<string, Meta> = new Map([
  [
    "post1",
    {
      title: "Title of post1",
      tag: [Tag.TargetChasing, Tag.VisibilityMetric],
      date: "2023-03-30",
    },
  ],
  [
    "post2",
    {
      title: "Title of post2",
      tag: [Tag.TargetChasing, Tag.CHOMP, Tag.Prediction],
      date: "2023-03-30",
    },
  ],
  [
    "post3",
    {
      title: "What makes ROS2 different from ROS1",
      tag: [Tag.ROS2],
      date: "2023-03-30",
    },
  ],
]);
