/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * Imports the necessary components.
 *
 * Imports the 'useBlockProps' React hook that is used to mark the block wrapper
 * element. It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   attributes    Available block attributes.
 * @param {Function} setAttributes Function that updates individual attributes.
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { content } = attributes;

	// Get the block's wrapper properties
	const blockProps = useBlockProps();

	return (
		<RichText
			{...blockProps}
			tagName="p"
			value={content}
			onChange={(newValue) => setAttributes({ content: newValue })}
			placeholder={__("Type your text here…", "plugin-slug")}
		/>
	);
}
