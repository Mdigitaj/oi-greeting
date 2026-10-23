
import { createFileRoute } from '@tanstack/react-router'

function HomePage() {
  return (
    <main className="min-h-screen bg-[#fffaf4] text-[#28352d]">
      <header className="flex items-center justify-between px-6 py-5 md:px-16">
        <a href="#" className="text-xl font-extrabold text-[#315b43]">
          🐾 Pet com Carinho
        </a>
        <a
          href="#oferta"
          className="rounded-full bg-[#315b43] px-5 py-3 text-sm font-bold text-white"
        >
          Conhecer o guia
        </a>
      </header>

      <section className="grid items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-16 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-[#e4efdf] px-4 py-2 text-sm font-semibold text-[#315b43]">
            GUIA DIGITAL PARA TUTORES
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Seu pet merece uma vida mais saudável e feliz!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Aprenda mais sobre cuidados diários, alimentação, higiene e
            prevenção para cuidar do seu melhor amigo com mais segurança.
          </p>
          <a
            href="#conteudo"
            className="mt-8 inline-block rounded-full bg-[#e58a52] px-7 py-4 font-bold text-white shadow-lg transition hover:opacity-90"
          >
            Quero cuidar melhor do meu pet →
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Para quem ama cães e gatos e quer aprender a cuidar melhor deles.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85"
            alt="Cachorro feliz recebendo carinho"
            className="h-[350px] w-full object-cover md:h-[500px]"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Cuidar bem começa com conhecimento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Pequenos cuidados na rotina podem fazer diferença no bem-estar
            do seu companheiro. Descubra o que observar e como criar hábitos
            melhores.
          </p>
          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
            <article className="rounded-2xl bg-[#f5f7f0] p-6">
              <div className="text-4xl">🥣</div>
              <h3 className="mt-4 text-xl font-bold">Alimentação</h3>
              <p className="mt-2 leading-7 text-gray-600">
                Entenda a importância de uma rotina alimentar adequada e de
                água fresca sempre disponível.
              </p>
            </article>
            <article className="rounded-2xl bg-[#f5f7f0] p-6">
              <div className="text-4xl">🧼</div>
              <h3 className="mt-4 text-xl font-bold">Higiene e conforto</h3>
              <p className="mt-2 leading-7 text-gray-600">
                Conheça cuidados de higiene, limpeza do ambiente e conforto
                para o dia a dia.
              </p>
            </article>
            <article className="rounded-2xl bg-[#f5f7f0] p-6">
              <div className="text-4xl">🐕</div>
              <h3 className="mt-4 text-xl font-bold">Bem-estar</h3>
              <p className="mt-2 leading-7 text-gray-600">
                Saiba mais sobre brincadeiras, atividade física, rotina e
                sinais de que algo pode não estar bem.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="conteudo" className="px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85"
              alt="Pessoa cuidando com carinho de seu cachorro"
              className="h-80 w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              O que você vai aprender?
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                'Cuidados essenciais para a rotina do seu pet',
                'Noções de alimentação e hidratação',
                'Higiene e cuidados com o ambiente',
                'A importância das vacinas e consultas veterinárias',
                'Como observar mudanças de comportamento',
                'Enriquecimento ambiental, brincadeiras e carinho',
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="font-bold text-[#4c855d]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#oferta"
              className="mt-8 inline-block rounded-full bg-[#315b43] px-7 py-4 font-bold text-white"
            >
              Quero conhecer o ebook →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf1e5] px-6 py-16 text-center md:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#52775a]">
            MAIS CONHECIMENTO, MAIS CARINHO
          </p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            Seu melhor amigo conta com você.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Comece hoje a construir uma rotina com mais atenção, cuidado e
            momentos felizes ao lado do seu pet.
          </p>
        </div>
      </section>

      <section id="oferta" className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-xl md:p-12">
          <div className="text-5xl">📘</div>
          <h2 className="mt-5 text-3xl font-extrabold">
            Guia de Cuidados e Saúde dos Pets
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            Um material digital para ajudar você a entender melhor as
            necessidades do seu companheiro e cuidar dele com mais atenção.
          </p>
          <div className="my-7 rounded-2xl bg-[#f5f7f0] p-5">
            <p className="font-semibold">Acesso ao guia digital</p>
            <p className="mt-2 text-sm text-gray-500">
              Preço e link de pagamento serão configurados antes da publicação
              final.
            </p>
          </div>
          <a
            href="#contato"
            className="block rounded-full bg-[#e58a52] px-6 py-4 font-extrabold text-white transition hover:opacity-90"
          >
            Tenho interesse no guia →
          </a>
          <p className="mt-4 text-xs leading-5 text-gray-500">
            Material educativo. Não substitui avaliação, diagnóstico ou
            tratamento realizado por médico-veterinário.
          </p>
        </div>
      </section>

      <section id="contato" className="bg-[#315b43] px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold">
          Cuide de quem enche sua vida de alegria 🐾
        </h2>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-white/80">
          Em breve você poderá acessar as informações de compra do guia por
          aqui.
        </p>
      </section>

      <footer className="px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pet com Carinho. Todos os direitos
        reservados.
      </footer>
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
