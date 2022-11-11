import * as React from "react";

export interface TreeProps {
    /**
     * Name of the node
     */
    content?: React.ReactNode;

    /**
     * Description of the node
     *
     * This is a good way to provide a custom icon for a node.
     */
    type?: React.ReactNode;

    /**
     * Default open state
     */
    open?: boolean;

    /**
     * Default visible state
     */
    visible?: boolean;

    /**
     * Whether or not an eye icon should be shown for the Tree
     *
     * Manage user interaction with the eye through the "onClick" prop.
     */
    canHide?: boolean;

    /**
     * Event handler for clicks on the eye
     */
    onClick?: React.MouseEventHandler<any>;

    /**
     * Custom react-spring animation config
     */
    springConfig?: Function;

    /**
     * ItemId of the node
     *
     * Custom identifier of tree item
     */
    itemId?: String;

    /**
     * Events on the tree span item, parameters: itemId.
     */
    onItemClick?: React.MouseEventHandler<any>;

    /**
     * Events on the toggle icon, parameters: itemId, isOpen.
     */
    onItemToggle?: React.MouseEventHandler<any>;

    icons?: {
        /**
         * Plus icon
         */
        plusIcon?: React.ReactNode;
        /**
         * Minus icon
         */
        minusIcon?: React.ReactNode;
        /**
         * Close icon
         */
        closeIcon?: React.ReactNode;
        /**
         * Hide(eye) icon
         */
        eyeIcon?: React.ReactNode;
    };
}

export default class Tree extends React.Component<TreeProps> {}
