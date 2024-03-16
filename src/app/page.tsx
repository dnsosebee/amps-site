export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-6 lg:py-8 prose">
        <h1>Agent Meta-Programming Systems Runtime</h1>
        <p>
          AMPS is a research project to develop a language and runtime for meta-self-improving AI
          agents. Unlike existing AI agents, AMPS agents will live in a{" "}
          <a href="https://en.wikipedia.org/wiki/Reflective_programming">
            reflective programming environment
          </a>{" "}
          which allows them to understand and modify their own planned behavior to most effectively
          help themselves reach their goals.
        </p>

        <h3>Agenda</h3>
        <ol>
          <li>
            Initial research - review of existing literature and technology to identify gaps and
            opportunities.
          </li>
          <li>
            Problem identification - collect problems that will serve as a realistic test of the
            efficacy of autonomous AI agents.
          </li>
          <li>
            Human trial recording - record a human (mysel) solving the problems identified in step 2
            out loud, on video and in screen recording.
          </li>
          <li>
            Pseudocode development - develop pseudocode based on human recordings to describe
            symbolically the processing done by the human.
          </li>
          <li>
            Language spec development - based on that pseudocode develop a language spec that will
            be used to implement the AMPS runtime.
          </li>
          <li>
            Initial Python library development - develop a Python library that will be used to
            implement the AMPS runtime.
          </li>
          <li>
            Iterative testing of language - try out the runtime on the problem list and iteratively
            update the language.
          </li>
          <li>
            Fine-tuning data collection - collect a dataset of AMPS frames and correct outputs.
          </li>
          <li>
            LLM fine-tuning - fine-tune an open-source language model on the dataset in order to
            better generate AMPS commands.
          </li>
          <li>
            Full implementation and evaluation - implement the full AMPS runtime and evaluate it on
            the problem list.
          </li>
          <li>Documentation - write up the results and publish online.</li>
        </ol>
      </main>
    </>
  );
}
