import React from "react";

export interface Props<T> {
    renderItem : (item : T) => React.ReactNode
    data : T[]
} 