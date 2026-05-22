import { motion, useReducedMotion } from 'framer-motion'

import { ArrowDown } from 'lucide-react'

import { Button } from '../components/ui/Button'

import { Container } from '../components/ui/Container'

import { BrandMark } from '../components/ui/BrandMark'

import { SectionEyebrow } from '../components/ui/SectionEyebrow'

import { EVENT_DATES, EVENT_GROUP_URL, HERO } from '../constants/event'

import { heroContainer, heroItem, heroItemFade, heroViewport } from '../lib/motion'



export function HeroSection() {

  const prefersReducedMotion = useReducedMotion()



  return (

    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-20 pt-14">

      <div
        className="pointer-events-none absolute inset-0 bg-[url('/HeroMobile.png')] bg-cover bg-top bg-no-repeat md:bg-[url('/Hero.png')] md:bg-center"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/70"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute right-[6%] top-[18%] hidden h-48 w-48 rounded-full border border-gold/15 opacity-60 md:block"
        aria-hidden="true"
      />
      <div
        className="animate-float-slow animation-delay-300 pointer-events-none absolute right-[7%] top-[20%] hidden h-32 w-32 rounded-full border border-gold/8 opacity-40 md:block"
        aria-hidden="true"
      />
      <div
        className="animate-float-slow pointer-events-none absolute bottom-[28%] left-[4%] h-28 w-28 rounded-full border border-gold/12 opacity-40 md:h-36 md:w-36"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[38vh] min-h-[11rem] max-h-[22rem] bg-[linear-gradient(to_top,var(--color-cream)_0%,color-mix(in_srgb,var(--color-cream)_92%,transparent)_28%,color-mix(in_srgb,var(--color-cream)_45%,transparent)_58%,transparent_100%)]"
        aria-hidden="true"
      />

      {prefersReducedMotion ? (

        <div className="relative z-10 w-full">

          <Container className="relative flex justify-center">

            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

              <div className="mb-6 flex justify-center">

                <BrandMark size="md" />

              </div>

              <h1 className="text-balance font-display text-[clamp(1.875rem,4.5vw,3.375rem)] font-normal leading-[1.15] tracking-normal text-ink">

                {HERO.title.lead}{' '}

                <span className="whitespace-nowrap">{HERO.title.keep}</span>

                <br />

                <em className="text-shimmer not-italic">

                  {HERO.titleHighlight[0]}

                  <br />

                  {HERO.titleHighlight[1]}

                </em>

              </h1>

              <div className="my-8 flex justify-center md:my-9">

                <SectionEyebrow className="mb-0" size="lg">{EVENT_DATES}</SectionEyebrow>

              </div>

              <p className="max-w-2xl font-sans text-base leading-relaxed text-ink-soft md:text-lg">

                {HERO.subtitle}

              </p>

              <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-muted md:text-[0.9375rem]">

                {HERO.audience}

              </p>

              <div className="mt-6 flex justify-center">

                <Button href={EVENT_GROUP_URL}>{HERO.cta}</Button>

              </div>

            </div>

          </Container>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

            <div className="flex flex-col items-center gap-2 opacity-35">

              <span className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-muted">

                Explorar

              </span>

              <ArrowDown size={13} className="animate-bounce text-gold" strokeWidth={1.5} />

            </div>

          </div>

        </div>

      ) : (

        <motion.div

          className="relative z-10 w-full"

          variants={heroContainer}

          initial="hidden"

          whileInView="visible"

          viewport={heroViewport}

        >

          <Container className="relative flex justify-center">

            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

              <motion.div variants={heroItem} className="mb-6 flex justify-center">

                <BrandMark size="md" />

              </motion.div>



              <motion.h1

                variants={heroItem}

                className="text-balance font-display text-[clamp(1.875rem,4.5vw,3.375rem)] font-normal leading-[1.15] tracking-normal text-ink"

              >

                {HERO.title.lead}{' '}

                <span className="whitespace-nowrap">{HERO.title.keep}</span>

                <br />

                <em className="text-shimmer not-italic">

                  {HERO.titleHighlight[0]}

                  <br />

                  {HERO.titleHighlight[1]}

                </em>

              </motion.h1>



              <motion.div variants={heroItem} className="mt-8 flex justify-center">

                <SectionEyebrow className="mb-0" size="lg">{EVENT_DATES}</SectionEyebrow>

              </motion.div>



              <motion.p

                variants={heroItem}

                className="max-w-2xl font-sans text-base leading-relaxed text-ink-soft md:text-lg"

              >

                {HERO.subtitle}

              </motion.p>



              <motion.p

                variants={heroItem}

                className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-muted md:text-[0.9375rem]"

              >

                {HERO.audience}

              </motion.p>



              <motion.div variants={heroItem} className="mt-8 flex justify-center">

                <Button href={EVENT_GROUP_URL}>{HERO.cta}</Button>

              </motion.div>

            </div>

          </Container>



          <motion.div

            variants={heroItemFade}

            className="absolute bottom-8 left-1/2 -translate-x-1/2"

          >


          </motion.div>

        </motion.div>

      )}

    </section>

  )

}


