import { JewelryCarousel } from '../components/JewelryCarousel'

import { Container } from '../components/ui/Container'

import { Ornament } from '../components/ui/Ornament'

import { SectionHeader } from '../components/ui/SectionHeader'

import { IMPORT } from '../constants/event'



const LABELS = [

  'Margem',

  'Importação',

  'Fornecedor',

  'Posicionamento',

  'Recorrência',

] as const



function ImportPoint({

  step,

  label,

  children,

}: {

  step: string

  label: string

  children: string

}) {

  return (

    <article className="group flex gap-5 md:gap-7">

      <span

        className="w-10 shrink-0 pt-0.5 font-display text-[1.65rem] tabular-nums leading-none text-gold/30 transition-colors duration-500 group-hover:text-gold/55 md:w-11 md:text-[1.85rem]"

        aria-hidden="true"

      >

        {step}

      </span>



      <div className="min-w-0 flex-1 border-l border-gold/15 pl-5 transition-colors duration-500 group-hover:border-gold/28 md:pl-6">

        <p className="mb-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold/70">

          {label}

        </p>

        <p className="font-sans text-[0.9375rem] leading-[1.65] text-muted md:text-base md:leading-[1.7]">

          {children}

        </p>

      </div>

    </article>

  )

}



export function ImportSection() {

  return (

    <section id="importacao" className=" pt-[6rem] relative">

      <Container>

        <SectionHeader

          eyebrow={IMPORT.eyebrow}

          title={IMPORT.title}

          titleHighlight={IMPORT.titleHighlight}

          description={IMPORT.intro}

        />



        <div className="mx-auto mt-14 max-w-xl md:mt-16">

          <p className="text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">

            {IMPORT.subtitle}

          </p>



          <ol className="mt-9 flex list-none flex-col gap-10 p-0 md:mt-10 md:gap-11">

            {IMPORT.items.map((item, i) => (

              <li key={item}>

                <ImportPoint

                  step={String(i + 1).padStart(2, '0')}

                  label={LABELS[i]}

                >

                  {item}

                </ImportPoint>

              </li>

            ))}

          </ol>



          <div className="mt-14 text-center md:mt-16">

            <Ornament className="mb-7 justify-center" />

            <p className="mx-auto max-w-lg font-sans text-base leading-relaxed text-muted md:text-lg">

              {IMPORT.closing}

            </p>

          </div>

        </div>

      </Container>



      <div className="relative mt-20 w-full md:mt-24">

        <JewelryCarousel />

      </div>

    </section>

  )

}


