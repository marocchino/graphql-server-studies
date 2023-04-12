import "./global";
import "./project";
import "./hello";
import "./task";
import { builder } from "../builder";

export const schema = builder.toSchema();
