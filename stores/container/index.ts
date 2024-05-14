import { create } from "zustand";

export const useContainerStore = create((setState) => ({
    count: 0,
    increment: () => setState((state: any) => ({ count: state.count + 1 }))
}))
