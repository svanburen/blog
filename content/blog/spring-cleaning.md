+++
title = "Spring Cleaning"
date = 2020-04-18T08:11:33-04:00
draft = false
+++
Spring is in the air!
Inspired by [Deletion Day](https://deletionday.com/), I've been tidying up some of my physical and digital life.
I've deleted old accounts, removed applications that I'm not using, and gotten rid of extraneous hardware.
But, the cleanup I'm most proud of is my [dotfiles](https://github.com/svanburen/dotfiles) cleanse.

## the purge

For awhile, I was a bit of a dotfiles pack rat.
I worried that the knowledge I had gained - the choices I had made - would be lost to the depths of time if I were to remove them from the text of the files themselves.
That meant old color schemes, old key bindings, old tips and tricks, all stayed in their respective places.
Perhaps moved around, but not deleted.
Over the years, this meant that my [vimrc had bloated up to ~1600 lines](https://github.com/svanburen/dotfiles/blob/4d1f7f/vimrc)!
I had also accumulated a lot of files for tools I'm no longer using, that were strewn all over my system.

I finally reached a breaking point, [removing the `cheat` tool](https://github.com/svanburen/dotfiles/commit/9ed3e0).
There was nothing wrong with it, but I wasn't using it as often as I thought.
I used this as momentum to move on to my [other](https://github.com/svanburen/dotfiles/commits/master?after=f56b7bf67301f60785f7a7af1ced945d25b4d5c8+174) [configuration](https://github.com/svanburen/dotfiles/commits/master?before=f56b7bf67301f60785f7a7af1ced945d25b4d5c8+175) [files](https://github.com/svanburen/dotfiles/commits/master?before=f56b7bf67301f60785f7a7af1ced945d25b4d5c8+140), mostly my vimrc.
Previously, I had been fairly lax on my git hygiene for the repo, using commit messages like ["Various updates"](https://github.com/svanburen/dotfiles/commit/26852a) or simply a ["✨"](https://github.com/svanburen/dotfiles/commit/579368).
I knew that removing all that accumulated knowledge meant that I needed to have better practices, so I started using a `tool:` prefix on my commit subjects, and trying to be better about abiding to [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit#Atomic_commit_convention).

## (neo)vim

Now, my [vimrc](https://github.com/svanburen/dotfiles/blob/master/vim/init.vim) is a lean ~350 lines!
(Maybe not lean for a vanilla vim purist, but it's reasonable for me!)
You'll also notice that I've converted over to neovim fully.
I had a number of settings, plugins, and mappings that were working around some of vim's weirdness, and I was using neovim 98% of the time.
I removed all the settings that were the default in neovim and did a lot of `:help` diving to understand the settings that remained.
I also dropped plugins that I used sparingly, some of the filetype specific autocommands, and the sectioning comments used for folding.
I've added a few plugins back that I wasn't quite able to shake (notably, I tried to learn vim's builtin autocomplete commands, but found [deoplete](https://github.com/Shougo/deoplete.nvim) to be something I couldn't avoid using).

## [XDG Base Dir](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)

Switching over to neovim meant that I could remove the hacks around neovim finding vim's configuration directory, and move everything to ~/.config.
I could also leverage neovim's data dir for [storing my plugins](https://github.com/svanburen/dotfiles/blob/f56b7bf67301f60785f7a7af1ced945d25b4d5c8/vim/init.vim#L24).
Given the neovim changes, I started to look elsewhere where I could move my dotfiles in ~/.config, and managed to get [everything except .tmux.conf](https://github.com/svanburen/dotfiles/blob/f56b7bf67301f60785f7a7af1ced945d25b4d5c8/install.conf.yaml#L14-L23) moved over.
This includes my global git configuration, which until now I didn't realize could be anywhere but ~/.gitconfig and ~/.gitignore!

## other configuration

Alongside the effort to move everything to within ~/.config, I ended up removing language specific configuration (mypy, isort, and flake8 config for Python, profiles.clj for Clojure), tooling configuration (curlrc, editorconfig, vale.ini), old package listings (Brewfile), and unused shell configuration (zprofile, zshenv, and zshrc).
Overall, [I've reduced my dotfiles down to things that I use _now_](https://github.com/svanburen/dotfiles/compare/4d1f7f...f56b7b).

And it feels great.

🛁
