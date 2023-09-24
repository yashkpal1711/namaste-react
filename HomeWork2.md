# 1- What is `NPM`?
    Ans 1: It is a Packagr Manager for javascript libraries. It is used to install, manage and share packages.
        Some Key features of NPM are:
            - Package Management
            - Dependency Resolution
            - Version Control
            -CLI

# 2- What is `Parcel/Webpack`? Why do we need it?
    Ans 2: Parcel and Webpack are both build tools used in web development to bundle and optimize web assets like
    JavaScript, CSS, HTML, and images.
    Some Key Features are:
        # HMR- Hot module reload
            As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR)
        # File Watcher Algorithm
            To support an optimal caching and development experience Parcel utilizes a very fast watcher written in C++ that integrates with low-level file watching functionality of each operating system. Using this watcher Parcel watches every file in your project root (including all node_modules). Based on events and metadata from these files, Parcel determines which files need to be rebuilt.
        #  BUNDLEING 
            It bundles everything into 3 files index.html, index.css, index.js
        # Minifying
        # CLean our Code(remove console.log)
        # Image Optimization
        # Compression
        # Caching while development
        # port Number

# 3-  What is `npx` ?
    Ans 3- npx is a package runner tool that comes with npm (Node Package Manager) and is used to execute Node.js packages. It allows you to run commands from packages that aren't globally installed on your system. npx makes it easy to use command-line tools that are distributed as npm packages without having to install them globally or specify their full path.

# 4- What is difference between `dependencies` vs `devDependencies`
    Ans 4- In the context of npm (Node Package Manager), there are two primary types of dependencies: `dependencies` and `devDependencies`. Here's the key difference between them:

        **Dependencies:**
        - These are the packages that your application or project directly depends on to run in a production environment.
        - They are typically libraries, frameworks, or modules that your code relies on for its core functionality.
        - Dependencies listed in the `dependencies` section of your `package.json` file will be installed when someone runs `npm install` or `npm ci` to set up your project for production use.
        - These dependencies are critical for your application to function correctly, and they should not include tools or packages used exclusively for development or testing.

        **DevDependencies:**
        - These are the packages that are only needed during development, testing, or build processes.
        - They include tools, testing libraries, bundlers, transpilers, linters, and other utilities that help you develop and maintain your codebase but are not required for the deployed application to run.
        - DevDependencies listed in the `devDependencies` section of your `package.json` file will be installed when someone runs `npm install --only=dev` or `npm ci --only=dev`. They are not included when someone installs your package for production use.
        - Keeping development dependencies separate from production dependencies helps reduce the size of the production bundle and improves deployment efficiency.

# 5- What is Tree Shaking?
    Ans 5-  Tree shaking is a technique used in modern JavaScript build processes, particularly in the context of bundlers like Webpack or Rollup, to eliminate dead or unused code (JavaScript modules or functions) from the final bundle. The term "tree shaking" comes from the idea of shaking a tree and letting the dead leaves (unused code) fall off while keeping the essential parts (used code).

        Here's how tree shaking works and why it's important:

        Static Analysis: Tree shaking relies on static analysis of the code. It examines the import and export statements in your JavaScript modules to determine which parts of the code are actually used.

        Marking Code as Unused: During the build process, the bundler marks all code that it believes is not used based on the entry point of your application. This includes functions, variables, or entire modules.

        Eliminating Unused Code: After marking, the bundler proceeds to remove or "shake off" the marked code from the final bundle. Only the code that is determined to be used (reachable) from the entry point remains.

        Key benefits of tree shaking:

        Smaller Bundle Size: By removing unused code, tree shaking reduces the size of the JavaScript bundle that needs to be downloaded by the end-users, resulting in faster page load times.

        Improved Performance: Smaller bundles lead to quicker parsing and execution of JavaScript, which can improve the overall performance of web applications.

        Efficient Development: Developers can import libraries and modules as needed during development without worrying about the final bundle size. Tree shaking will exclude unused parts during production builds.

        For tree shaking to work effectively, your code must be written in a way that supports static analysis. That means using ES6 module syntax (import/export) and ensuring that your imports and exports are clear and granular.

        It's also worth noting that tree shaking is most commonly associated with modern JavaScript bundlers and frameworks, especially those that use tools like Webpack, Rollup, or Parcel. These tools have built-in support for tree shaking, making it easier to optimize your JavaScript bundles.







        
