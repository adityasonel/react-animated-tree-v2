import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const isExternal = (id) => !id.startsWith(".") && !id.startsWith("/");
const getBabelOptions = ({ useESModules }) => ({
    babelrc: false,
    exclude: "**/node_modules/**",
    babelHelpers: "runtime",
    presets: ["@babel/react", "@babel/env"],
    plugins: [["@babel/transform-runtime", { useESModules }]],
});
const overrides = {
    compilerOptions: {
        noUnusedParameters: true,
        noUnusedLocals: true,
        strictNullChecks: true,
        moduleResolution: "node",
        declaration: true, //抽离声明代码 *.d.js
        allowSyntheticDefaultImports: true,
    },
    useTsconfigDeclarationDir: true,
};

function createConfig(entry, out, name) {
    return [
        {
            input: `./src/${entry}.tsx`,
            output: { file: `dist/${out}.es.js`, format: "es" },
            external: isExternal,
            plugins: [
                babel(getBabelOptions({ useESModules: true })),
                typescript({
                    tsconfigOverride: overrides,
                }),
            ],
        },
        {
            input: `./src/${entry}.tsx`,
            output: { file: `dist/${out}.cjs.js`, format: "cjs" },
            external: isExternal,
            plugins: [
                babel(getBabelOptions({ useESModules: false })),
                typescript({
                    tsconfigOverride: overrides,
                }),
            ],
        },
        {
            input: `./src/${entry}.tsx`,
            output: {
                file: `dist/${out}.umd.js`,
                format: "umd",
                name,
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
            external: ["react", "react-dom"],
            plugins: [
                babel(getBabelOptions({ useESModules: false })),
                nodeResolve(),
                commonjs(),
                typescript({
                    tsconfigOverride: overrides,
                }),
            ],
        },
    ];
}

export default [...createConfig("index", "react-animated-tree-v2", "ReactAnimatedTreeV2")];
