import { describe, expect, it } from "vitest";
import { generatePluginCss } from "./utils";



describe('tailwindcss-animations plugins 1', () => {
    it('use a predefined animation', async () =>{
        const css = await generatePluginCss({
            content:'<div class="animate-zoom-in">Hello</div>'
        })

        expect(css).toMatch('@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out}')
    })
    it('use a predefined animation delay', async () =>{
        const css = await generatePluginCss({
            content:'<div class="animate-delay-[77ms]">Hello</div>'
        })

        expect(css).toMatch('.animate-delay-\\[77ms\\]{animation-delay:77ms}')
    })
    it('use a predefined animation duration', async () =>{
        const css = await generatePluginCss({
            content:'<div class="animate-duration-[77ms]">Hello</div>'
        })

        expect(css).toMatch('.animate-duration-\\[77ms\\]{animation-duration:77ms}')
    })
    it('use a timing function animation', async () =>{
        const css = await generatePluginCss({
            content:'<div class="animate-linear">Hello</div>'
        })

        expect(css).toMatch('.animate-linear{animation-timing-function:linear}')
    })
  
})
