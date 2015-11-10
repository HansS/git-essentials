# Git-essentials
Git Essentials Course on Lynda

###It all starts with git init
git-init - Create an empty Git repository or reinitialize an existing one

git init [-q | --quiet] [--bare] [--template=<template_directory>]
	  [--separate-git-dir <git dir>]
	  [--shared[=<permissions>]] [directory]

This command creates an empty Git repository - basically a .git directory with subdirectories for objects, refs/heads, refs/tags, and template files. An initial HEAD file that references the HEAD of the master branch is also created.

If the $GIT_DIR environment variable is set then it specifies a path to use instead of ./.git for the base of the repository.

If the object storage directory is specified via the $GIT_OBJECT_DIRECTORY environment variable then the sha1 directories are created underneath - otherwise the default $GIT_DIR/objects directory is used.

Running git init in an existing repository is safe. It will not overwrite things that are already there. The primary reason for rerunning git init is to pick up newly added templates (or to move the repository to another place if --separate-git-dir is given).

The Git directory is where Git stores the metadata and object database for your project. This is the most important part of Git, and it is what is copied when you clone a repository from another computer.

The working directory is a single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify.

The staging area is a file, generally contained in your Git directory, that stores information about what will go into your next commit. It’s sometimes referred to as the “index”, but it’s also common to refer to it as the staging area.

The basic Git workflow goes something like this:

+ You modify files in your working directory.
+ You stage the files, adding snapshots of them to your staging area.
+ You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.