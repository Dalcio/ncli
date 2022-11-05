# cli - Next Command Line Interface

Next js r CLI is a command-line interface tool that you use to initialize, develop, scaffold,

# Summary

- [ncli - Next cli](#ncli-next-cli)
  - [Installing Next CLI](#installing-next-cli)
  - [Basic Workflow](#ibasic-workflow)
  - [Workspace and project files](#workspace-and-project-files)
  - [CLI command-language systanx](#cli-command-language-syntax)
  - [Command Overview](#command-overview)
- [ncli generate](#ncli-generate)

# ncli - Next cli

## Installing Next CLI

Install the CLI using the `npm` package manager:

```bash
npm install --global next-js-cli
```

or

```bash
npm install -g next-js-cli
```

## Basic Workflow

Invoke the tool on the command line through the `ncli` executable. Online help is available on the command line. Enter the following to list commands or options for a given command (such as [generate](#)) with a short description.

```bash
ncli help
ncli generate --help
```

## Workspace and project files

the **ncli** only works inside a *next*js folder or a next js workspace. So this means that the commands in command-overview nust be executed inside the next js project directory.

Use the [ncli generate](https://angular.io/cli/generate) command to add new files for additional components, hooks, api routes and new pages.

## CLI command-language syntax

Command syntax is shown as follows:

```bash
ncli <command> [command-params]

```

## Command Overview

| COMMAND    | ALIAS | DESCRIPTION                                           |
| ---------- | ----- | ----------------------------------------------------- |
| `generate` | `g`   | Generates and/or modifies files based on a schematic. |

---

# ncli generate

- [Generate Arguments](#generate-arguments)
- [Generate Options](#generate-options)
- [Generate Commands](#generate-commands)

Generates files based on a schematic.

```bash
ncli generate <schematic> <name> [path] [ext]
```

```bash
ncli g <schematic> <name> [path] [ext]
```

This command has the following [sub-commands](https://angular.io/cli/generate#generate-commands):

- api
- component
- hook
- api

## Generate Arguments

| ARGUMENT    | DESCRIPTION                                                           | VALUE TYPE | VALUES                  | DEFAULT VALUE |
| ----------- | --------------------------------------------------------------------- | ---------- | ----------------------- | ------------- |
| `schematic` | The [collection:schematic] to run.                                    | `string`   |                         |               |
| `<name>`    | The name of the schematic item (hook name, api route name, and so on) | `string`   |                         |               |
| `[path]`    | The path where the schematic will be operated                         | `string`   |                         | `.`           |
| `[ext]`     | Represents the extension of the file (ts or js)                       | `string`   | `js`<br />or <br />`ts` |               |

## Generate Options

| OPTION   | DESCRIPTION                                           | VALUE TYPE | DEFAULT VALUE |
| -------- | ----------------------------------------------------- | ---------- | ------------- |
| `--help` | Shows a help message for this command in the console. | `boolean`  | `false`       |

## Generate Commands

### api

```bash
ncli generate api <name> [path] [ext]
```

```bash
ncli generate a [path] [ext]
```

Creates a new api route and his handler in the given or default project `src/pages/api` directory.

### component

```bash
ncli generate component <name> [path] [ext]
```

```bash
ncli generate c [path] [ext]
```

Creates a new, generic component definition in the given or default project. `src/compoents` directory

### hook

```bash
ncli generate hook <name> [path] [ext]
```

```bash
ncli generate h [path] [ext]
```

Creates a new hook definition in the given or default project. `src/hooks` directory

#### page

```bash
ncli generate page <name> [path] [ext]
```

```bash
ncli generate p [path] [ext]
```

Creates a new page route and component in the given or default project `src/pages` directory.

#### **inpired by [@angula/cli](https://angular.io/cli)**

<pre class="lang- prettyprint"><br class="Apple-interchange-newline"/>

</pre>
