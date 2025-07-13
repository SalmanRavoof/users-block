/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl } from '@wordpress/components';

// Fallback Method: ServerSideRender component
// import ServerSideRender from "@wordpress/server-side-render";

// Method 2: Client-side component
import { useEntityRecords } from "@wordpress/core-data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	// Method 2: Fetching data using the core-data package
	const { records, isResolving } = useEntityRecords("root", "user", {
		per_page: attributes.numberOfUsers,
		roles: attributes.role,
	});

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title={__("Set User Role", "user-blocks")}>
						<PanelRow>
							<SelectControl
								label={__("User role", "user-blocks")}
								value={attributes.role}
								options={[
									{ label: __("Contributor", "user-blocks"), value: "contributor" },
									{ label: __("Author", "user-blocks"), value: "author" },
									{ label: __("Editor", "user-blocks"), value: "editor" },
									{ label: __("Administrator", "user-blocks"), value: "administrator" },
								]}
								onChange={(role) => setAttributes({ role })}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={__("Number of users", "user-blocks")}
								value={attributes.numberOfUsers}
								options={[
									{ label: "2", value: 2 },
									{ label: "4", value: 4 },
									{ label: "8", value: 8 },
									{ label: "12", value: 12 },
									{ label: "16", value: 16 },
								]}
								onChange={(value) =>
									setAttributes({ numberOfUsers: parseInt(value, 10) })
								}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			{/* // Fallback Method: ServerSideRender component. */}
			{/* <ServerSideRender
				block="wpdev/example-dynamic-block"
				attributes={attributes}
			/> */}
			{/* // Method 2: Using a client-side component. */}
			{records && (
				<ul className="wp-block-multidots-users-block">
					{records.map((record) => (
						<li key={record.id}>
							<a href={record.link}>
								<img
									src={record.avatar_urls[48]}
									alt={`Profile image of ${record.nickname}`}
								/>{" "}
								{record.nickname}
							</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
}