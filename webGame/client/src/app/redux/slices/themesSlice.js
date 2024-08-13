'use client';
import { createSlice } from '@reduxjs/toolkit';
// import { themes } from '../../styles/themes';
import { getThemeFromLocalStorage, saveThemeToLocalStorage } from '../localStorage';
const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    currentTheme: getThemeFromLocalStorage() || 'Dark',
    themes: {
      Dark: {
        //Restyled design
        newsBG:`bg-slate-800`,
        newsText:`text-slate-300`,
        //Posts
        postsBG:`bg-slate-800`,
        postsText:`text-slate-300`,
        //news
        newsBG:`bg-slate-800`,
        newsText:`text-slate-300`,
        newsBorder:`border-slate-500`,
        newsShadow:`shadow-black/50`,

        LogoText:`text-sky-300`,
        LogoText2:`text-amber-300`,
        ThemeNav:'bg-slate-900',
        bg:'bg-slate-800',
        inputBG:'bg-slate-600/40',
        Circles:'bg-slate-400',
        Cancel:'bg-slate-600/40',
        ResetPassword:'bg-slate-800/90',
        CreateAccountButton:`bg-slate-800/60`,
        shadow:'shadow-[rgba(0,0,0,.7)]',
        border:'border-slate-900',
        border1:`border-slate-700`,
        text:'text-slate-300',
        textDim:'text-slate-400',
        placeholderText:'placeholder:text-slate-300',
        textLinks:`text-sky-400`,
        errorClose:`text-orange-700`,
        GradientLeft:`bg-gradient-to-r from-slate-900 to-slate-800`,
        GradientMiddle:`bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800`,
        GradientRight:`bg-gradient-to-r from-slate-800 to-slate-900`,
        menuCircle:`bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600`,
      },
      Light: {
        //Restyled design
        newsBG:`bg-slate-300`,
        newsText:`text-slate-800`,
        //
        LogoText:`text-sky-700`,
        LogoText2:`text-amber-700`,
        ThemeNav:'bg-slate-500/40',
        bg:'bg-slate-200',
        inputBG:'bg-slate-500/20',
        Circles:'bg-slate-600',
        Cancel:'bg-slate-500/60',
        ResetPassword:'bg-slate-400/80',
        CreateAccountButton:`bg-slate-500/50`,
        shadow:'shadow-[rgba(0,0,0,.7)]',
        border:'border-slate-400',
        border1:`border-slate-700/40`,
        text:'text-slate-800',
        textDim:'text-slate-700',
        placeholderText:'placeholder:text-slate-600',
        textLinks:`text-sky-500`,
        errorClose:`text-amber-700`,
        GradientLeft:`bg-gradient-to-r from-slate-400 to-slate-300`,
        GradientMiddle:`bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300`,
        GradientRight:`bg-gradient-to-r from-slate-300 to-slate-400`,
      },
      Christmas: {
        LogoText:`text-red-700`,
        LogoText2:`text-red-700/50`,
        ThemeNav:'bg-red-400',
        bg:'bg-red-200',
        inputBG:'bg-red-300/20',
        Circles:'bg-red-800',
        Cancel:'bg-red-200/70',
        ResetPassword:'bg-red-300/70',
        CreateAccountButton:`bg-red-200/50`,
        shadow:'shadow-[rgba(255,0,0,.7)]',
        border:'border-red-300',
        border1:`border-red-500`,
        text:'text-red-900',
        textDim:'text-red-800',
        placeholderText:'placeholder:text-red-800',
        textLinks:`text-slate-800`,
        errorClose:`text-slate-900`,
        GradientLeft:`bg-gradient-to-r from-slate-700 to-slate-300`,
        GradientMiddle:`bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300`,
        GradientRight:`bg-gradient-to-r from-slate-300 to-slate-400`,
      },
      Halloween: {
        LogoText:`text-sky-500/70`,
        LogoText2:`text-orange-500/70`,
        ThemeNav:'bg-zinc-800',
        bg:'bg-zinc-700',
        inputBG:'bg-zinc-500/20',
        Circles:'bg-zinc-500',
        Cancel:'bg-zinc-700',
        ResetPassword:'bg-zinc-900/80',
        CreateAccountButton:`bg-zinc-900`,
        placeholderText:'placeholder:text-zinc-300',
        text:'text-zinc-300',
        textDim:'text-zinc-400',
        border:'border-zinc-300/20',
        border1:'border-zinc-700',
        shadow:'shadow-[rgba(0,0,0,.5)]',
        textLinks:`text-orange-600`,
        errorClose:`text-orange-900`,
        GradientLeft:`bg-gradient-to-r from-slate-700 to-slate-300`,
        GradientMiddle:`bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300`,
        GradientRight:`bg-gradient-to-r from-slate-300 to-slate-400`,
      },
      Easter: {
        LogoText:`text-orange-900`,
        LogoText2:`text-amber-700`,
        ThemeNav:'bg-orange-950',
        bg:'bg-orange-200',
        inputBG:'bg-orange-300/40',
        Circles:'bg-orange-700',
        Cancel:'bg-amber-200/80',
        ResetPassword:'bg-orange-400/40',
        CreateAccountButton:`bg-amber-200/80`,
        placeholderText:'placeholder:text-orange-900',
        text:'text-amber-900',
        textDim:'text-amber-700',
        border:'border-orange-800/40',
        border1:'border-amber-800/40',
        shadow:'shadow-[rgba(0,0,0,1)]',
        textLinks:`text-orange-600`,
        errorClose:`text-slate-300`,
        GradientLeft:`bg-gradient-to-r from-slate-700 to-slate-300`,
        GradientMiddle:`bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300`,
        GradientRight:`bg-gradient-to-r from-slate-300 to-slate-400`,
      },
      Winter: {
        LogoText:`text-sky-400`,
        LogoText2:`text-sky-200`,
        ThemeNav:'bg-sky-900',
        bg:'bg-sky-700',
        inputBG:'bg-sky-500/20',
        Circles:'bg-sky-500',
        Cancel:'bg-sky-600',
        ResetPassword:'bg-sky-700',
        CreateAccountButton:`bg-sky-700/90`,
        placeholderText:'placeholder:text-sky-300',
        text:'text-sky-200',
        textDim:'text-sky-300',
        border:'border-sky-300/20',
        border1:'border-sky-700',
        shadow:'shadow-[rgba(0,0,0,.5)]',
        textLinks:`text-black`,
        errorClose:`text-sky-200`,
        GradientLeft:`bg-gradient-to-r from-slate-700 to-slate-300`,
        GradientMiddle:`bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300`,
        GradientRight:`bg-gradient-to-r from-slate-300 to-slate-400`,
      },
      Spring: {
        LogoText:`text-slate-900`,
        LogoText2:`text-lime-700`,
        ThemeNav:'bg-lime-500/50',
        bg:'bg-lime-300/60',
        inputBG:'bg-lime-600/50',
        Circles:'bg-lime-800',
        Cancel:'bg-teal-900/20',
        ResetPassword:'bg-lime-200/50',
        CreateAccountButton:`bg-lime-200`,
        placeholderText:'placeholder:text-slate-900',
        text:'text-slate-900',
        textDim:'text-slate-900',
        border:'border-emerald-600/40',
        border1:'border-emerald-800/60',
        shadow:'shadow-[rgba(0,0,0,.5)]',
        textLinks:`text-lime-900`,
        errorClose:`text-slate-900`,    
        GradientLeft:`bg-gradient-to-r from-slate-700 to-slate-300`,
        GradientMiddle:`bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300`,
        GradientRight:`bg-gradient-to-r from-slate-300 to-slate-400`,
      },
      Summer: {
        LogoText:`text-orange-600`,
        LogoText2:`text-amber-500`,
        ThemeNav:'bg-gradient-to-r from-orange-500 to-yellow-500',
        bg:'bg-gradient-to-r from-orange-300 to-yellow-300',
        inputBG:'bg-gradient-to-r from-orange-500/80 via-yellow-500/80 to-amber-500/80',
        Circles:'bg-yellow-300',
        Cancel:'bg-gradient-to-l from-orange-500 to-yellow-500',
        ResetPassword:'bg-orange-400/50',
        CreateAccountButton:`bg-gradient-to-l from-orange-500 to-yellow-500`,
        placeholderText:'placeholder:text-slate-900',
        text:'text-slate-900',
        textDim:'text-slate-900',
        border:'border-amber-600',
        border1:'border-amber-300',
        shadow:'shadow-[rgba(0,0,0,.5)]',
        textLinks:`text-orange-800`,
        errorClose:`text-slate-900`,
        GradientLeft:`bg-gradient-to-r from-slate-700 to-slate-300`,
        GradientMiddle:`bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300`,
        GradientRight:`bg-gradient-to-r from-slate-300 to-slate-400`,
      },
      Autumn: {
        LogoText:`text-orange-600/80`,
        LogoText2:`text-yellow-600/80`,
        ThemeNav:'bg-gradient-to-r from-orange-950 to-yellow-950',
        bg:'bg-gradient-to-r from-orange-800/70 to-yellow-800/70',
        inputBG:'bg-gradient-to-r from-orange-800 via-yellow-800 to-amber-800',
        Circles:'bg-orange-600',
        Cancel:'bg-gradient-to-l from-orange-800 to-yellow-800',
        ResetPassword:'bg-gradient-to-l from-orange-800/50 to-yellow-800/50',
        CreateAccountButton:`bg-gradient-to-l from-orange-800 to-yellow-800`,
        placeholderText:'placeholder:text-slate-200',
        text:'text-slate-200',
        textDim:'text-slate-300',
        border:'border-amber-300/20',
        border1:'border-orange-300/20',
        shadow:'shadow-[rgba(0,0,0,.5)]',
        textLinks:`text-orange-200`,
        errorClose:`text-slate-200`,
        GradientLeft:`bg-gradient-to-r from-slate-700 to-slate-300`,
        GradientMiddle:`bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300`,
        GradientRight:`bg-gradient-to-r from-slate-300 to-slate-400`,
      },
    },
  },
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      saveThemeToLocalStorage(action.payload);
    },
    addTheme: (state, action) => {
      const { themeName, themeStyles } = action.payload;
      state.themes[themeName] = themeStyles;
    },
  },
});

export const { setTheme, addTheme } = themesSlice.actions;
export default themesSlice.reducer;