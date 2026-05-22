import { motion, useReducedMotion } from 'framer-motion'

import { ArrowDown } from 'lucide-react'

import { Button } from '../components/ui/Button'

import { Container } from '../components/ui/Container'

import { BrandMark } from '../components/ui/BrandMark'

import { HeroEventDates } from '../components/ui/HeroEventDates'

import { EVENT_GROUP_URL, HERO } from '../constants/event'

import { heroContainer, heroItem, heroItemFade, heroViewport } from '../lib/motion'



export function HeroSection() {

  const prefersReducedMotion = useReducedMotion()



  return (

    <section id="hero" className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-20 pt-17">

      <div
        className="pointer-events-none absolute inset-0 bg-[url('/HeroMobile.png')] bg-cover opacity-70 bg-top bg-no-repeat md:bg-[url('/Hero.png')] md:bg-center"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/80"
        aria-hidden="true"
      />
      <div
        className="section-edge-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-40 lg:h-52"
        aria-hidden="true"
      />
      {prefersReducedMotion ? (

        <div className="relative z-10 w-full">

          <Container className="relative flex justify-center">

            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

              <div className="mb-8 flex justify-center">

                <BrandMark size="md" />

              </div>

              <h1 className="text-balance font-display font-normal tracking-normal text-ink">

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

                <HeroEventDates />

              </div>

              <div className="mx-auto mt-6 w-full max-w-none text-center sm:max-w-2xl md:mt-10">

                <p className="font-sans text-base leading-relaxed text-pretty text-ink-soft md:text-lg">

                  {HERO.subtitle}

                </p>

                <p className="mt-4 font-sans text-base leading-relaxed text-pretty text-muted md:mt-5 md:text-[0.9375rem]">

                  {HERO.audience}

                </p>

              </div>

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

              <motion.div variants={heroItem} className="mb-12 flex justify-center">

                <BrandMark size="md" />

              </motion.div>



              <motion.h1

                variants={heroItem}

                className="text-balance font-display font-normal tracking-normal text-ink"

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

                <HeroEventDates />

              </motion.div>



              <motion.div

                variants={heroItem}

                className="mx-auto mt-6 w-full max-w-none text-center sm:max-w-2xl md:mt-10"

              >

                <p className="font-sans text-base leading-relaxed text-pretty text-ink-soft md:text-lg">

                  {HERO.subtitle}

                </p>



                <p className="mt-4 font-sans text-sm leading-relaxed text-pretty text-muted md:mt-5 md:text-[0.9375rem]">

                  {HERO.audience}

                </p>

              </motion.div>



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


