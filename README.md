# Exploring TypeScript 7 Internals

TypeScript 7 has not been released at the time of writing.  The big change is that the TypeScript compiler is being ported from TypeScript to Go.

What's staying the same is the internals of how the compiler is structured - at least at the top level, probably deep inside too.  This makes sense - porting a complier is a big enough job without trying to change other things at the same time!  So I'll begin by pointing to some resources on TypeScript internals prior to TypeScript 7.

* [TypeScript Compiler Internals - overview](https://basarat.gitbook.io/typescript/overview) - Basarat's guide
* [How the TypeScript Compiler Compiles](git@github.com:Antony74/typescript-go-play.git) - a YouTube video by Orta Therox

So the top-level structure, which are also compile phases, are the same:

* Scanner
* Parser
* Binder
* Checker
* Emitter

Therox comments in his video that these key files are all many thousands of lines long, like that's just an unfortunate reality of complier code.  The key to making large codebases comprehensible is knowing where and how to split functionality to make it more understandable (and not to split it into so many small fragments that they seem meaningless).  So I'm quite pleased to see some of these files are now directories in the Go port.  For instance `checker.ts` is now several files within a folder, hopefully all brought together by `checker/checker.go`.