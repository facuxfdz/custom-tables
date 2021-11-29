import React from "react";

export interface GenericProps<T> {
    renderItem : (item : T) => React.ReactNode
    data : T[]
} 
export interface IdjObj {
    id: string | number
}
export interface ItemProps<T> {
    item: T;
    renderItem: (item: T) => React.ReactNode;
  }