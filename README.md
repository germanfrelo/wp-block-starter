# Plugin Starter Template

This is a universal starter template for creating modern WordPress block plugins. It uses an **always multi-block** layout.

## Quick Start

Follow these steps to set up a new plugin from this template.

### 1. Copy and Rename

1. **Copy this entire folder** and rename it to your new plugin's slug (e.g., `my-plugin`).
2. **Rename the main PHP file** inside from `plugin-slug.php` to match your new folder (e.g., `my-plugin.php`).

### 2. Find & Replace All

You must run two replacements across the entire project **(Case Sensitive)**:

1. **PHP Function Prefix (Snake Case):**

      - Find: `plugin_slug`
      - Replace with: `my_plugin` (Use underscores!)
      - *Target: Only affects PHP function names.*

2. **Plugin Slug / Namespace (Kebab Case):**

      - Find: `plugin-slug`
      - Replace with: `my-plugin` (Use hyphens!)
      - *Target: Affects Text Domain, @package, Block Names, JSON files, package.json.*

### 3. Update Headers

Open `my-plugin.php` and `package.json` and fill in the bracketed placeholders (`[Plugin Name]`, `[Author]`, etc).

### 4. Install and Prep

1. **Run Install:**

    ```sh
    npm install
    ```

2. **Run Initial Build:**
    (This ensures the build tools are ready and the manifest exists).

    ```sh
    npm run build
    ```

### 5. Create First Block

Your plugin needs at least one block to function.

**Follow the [Adding New Blocks](#adding-new-blocks) guide below** to create your first block (e.g., `testimonial`) by duplicating the boilerplate.

### 6. Start Developing

Once your first block folder is created:

```sh
npm start
```

## Adding New Blocks

To add a new block (or your first block), use the **"Duplicate & Rename"** workflow:

1. **Duplicate:** Copy the `src/_boilerplate` folder.
2. **Rename:** Rename the *copy* to your new block name (e.g., `testimonial`).
3. **Configure:** Open `src/testimonial/block.json`:
      - **Name:** Change `"name": "my-plugin/block-slug"` to `"name": "my-plugin/testimonial"`.
      - **Title:** Update `[Block Title]` to "Testimonial".
      - **Description:** Update the description.

> [!CAUTION]
> Do not rename `src/_boilerplate` directly; keep it as your master copy.

## Dynamic Block Recipe

To make a block dynamic (PHP rendered):

1. Create the block using the steps above.
2. Create a file named `render.php` inside the block folder.
3. Open `block.json` and add this property:

    ```json
    "render": "file:./render.php"
    ```

4. Update `save.js` to return `null`.

The build is configured to copy PHP files (`--webpack-copy-php`) automatically.
