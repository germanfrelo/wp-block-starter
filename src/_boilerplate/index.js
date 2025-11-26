/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Import the internal dependencies.
 */
import metadata from "./block.json";
import Edit from "./edit.js";
import save from "./save.js";

/**
 * Import the block's stylesheets.
 */
import "./editor.css";
import "./style.css";

/**
 * (Optional) Define a custom SVG icon for the block.
 *
 * To use the fallback Dashicon (from block.json):
 * - Keep 'customSVGIcon' set to 'null'.
 *
 * To use a custom SVG:
 * - Replace 'null' with your SVG. E.g.:
 * const customSVGIcon = (<svg>{...}</svg>);
 */
const customSVGIcon = null;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	// 1. Spreads all properties from block.json.
	...metadata,

	// 2. Uses customSVGIcon if it's not null, otherwise uses metadata.icon
	icon: customSVGIcon || metadata.icon,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
