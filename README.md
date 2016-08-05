# Learning JavaScript, 3rd Edition: Companion Repository

This repository contains code samples from my book, Learning JavaScript, 3rd Edition (O'Reilly Media).

## Introduction & Status

Many of you have been asking where the code samples are.  Originally, I was not going to do a companion repo for this book because, with a few exceptions, most of the code samples in the book are simply small snippets that don't lend themselves well to organizing into a companion repo.  Also, many of the code samples are intended to be entered _interactively_ in a REPL (a browser console window, or Node), which makes them awkward for inclusion in a companion repository.  For example, from Chapter 5:

    const n = 5;
    const s = "5";
    n === s;            // false -- different types
    n !== s;            // true
    n === Number(s);    // true -- "5" converted to numeric 5
    n !== Number(s);    // false
    n == s;             // true; not recommended
    n != s;             // false; not recommended

If you type this example into a REPL, you will see the resultant value from each line...but if I put this in a file in the companion repo, and you run it (either in a browser or with Node), there is no output at all!

Problems notwithstanding, enough people have asked (and begged!) for a companion repo, so I am going to start by focusing on the "larger" examples that do lend themselves well to a companion repo (such as Chapters 1, 4, and 14).  I am open to suggestions on how to handle the code samples that are designed to be run interactively.

## How this Repo is Structured

Sample code for each Chapter is in its own directory; Chapter 1 examples are in `ch01`, Chapter 2 examples are in `ch02`, and so on.  Each chapter will have its own `README.md` file with notes specific to the examples from that chapter.

Many of the examples in the book are progressive; as you progress through the chapter, the code is progressively improved.  Generally, the code in the repo is the _final state_ you will reach at the end of the chapter, although I may include critical interemdiate steps in commented-out sections or separate files.
