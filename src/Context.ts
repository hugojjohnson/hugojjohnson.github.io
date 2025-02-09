// src/context.tsx
import { TagsContext } from "./Interfaces"
import { createContext } from "react";


// Create contexts with initial values
export const UserContext = createContext<TagsContext>([[], () => {}]);

