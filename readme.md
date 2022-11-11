[![Build Status](https://travis-ci.com/adityasonel/react-animated-tree-v2.svg?branch=master)](https://travis-ci.com/adityasonel/react-animated-tree-v2) [![npm version](https://badge.fury.io/js/react-animated-tree-v2.svg)](//npmjs.com/package/react-animated-tree-v2)

Port of [react-animated-tree](https://github.com/drcmda/react-animated-tree), with updated libraries, custom svg icons and many more new features.

    npm install react-animated-tree-v2

A simple, configurable tree view control for React.

<p align="middle">
  <img src="assets/tree.gif" width="600" />
</p>

Demo: https://codesandbox.io/embed/react-animated-tree-v2-33u37

-   `content`, Name of the node (string or React-component)
-   `type`, optional description, good for displaying icons, too (string or React-component)
-   `open`, optional: default open state
-   `canHide`, optional: when set true displays an eye icon
-   `visible`, optional: default visible state
-   `onClick`, optional: click events on the eye
-   `springConfig`, optional: react-spring animation config
-   `onItemClick`, optional: click events on the tree span item (pass itemId props as parameter)
-   `onItemToggle`, optional: click events on the toggle icon, parameters: itemId, isOpen
-   `itemId`, optional: custom identifier of tree item
-   `icons`, optional: custom svg icons (plus, minus, close and eye)

Customised icon demo: https://codesandbox.io/embed/react-animated-tree-v2-custom-icons-mz23x

```jsx
import Tree from "react-animated-tree-v2";

<Tree
    content="Apple"
    type="Fruit"
    open
    canHide
    visible
    onClick={console.log}
    itemId={"apple"}
    onItemClick={(itemId) => console.log(itemId)}
>
    <Tree content="Contents">
        <Tree content="Seeds" />
    </Tree>
</Tree>;
```

Create your own effects by passing a [react-spring](https://github.com/pmndrs/react-spring) config. The config below is the default (items fade in while moving in 20px from the right). You can go wild here by rotating, flipping, etc.

```jsx
config = open => ({
  from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
  to: {
    height: open ? 'auto' : 0,
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0px,0,0)' : 'translate3d(20px,0,0)',
  },
})

const SpecialTree = props => <Tree {...props} springConfig={config} />

<SpecialTree content="Orange">
  <SpecialTree content="Juice" />
</SpecialTree>
```
