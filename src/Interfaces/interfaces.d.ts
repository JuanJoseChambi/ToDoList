
// --------------------------------
export interface Children {
    children: JSX.Element[] | JSX.Element | string
}
// --------------------------------

// --------------------------------
export interface Todo {
    id:string
    text:string
    completed: boolean
    date?: null | Date
}
export interface TodoState {
    todos: Todo[]
    todosBackup: Todo[] 
}
export interface RootState {
    todos: TodoState
}
// --------------------------------


// --------------------------------
export interface PropsUseFade  {
    isOpen: () => void;
    onClose: () => void;
    isVisible: boolean;
    isClosing: boolean;
}
export interface modalProps extends Omit<PropsUseFade, 'isOpen'>  {
    children: JSX.Element[] | JSX.Element
    styles?: string
};
// --------------------------------


// --------------------------------
export interface btnsProps extends Children {
    onClick: () => void
}
// --------------------------------


// --------------------------------
export interface TooltipProp extends Children {
    text: string
}
// --------------------------------
