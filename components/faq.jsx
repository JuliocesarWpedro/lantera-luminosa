import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 pb-5 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex bg-green items-center font-primary justify-between w-full px-4 py-4 text-lg text-left text-white rounded-lg hover:bg-[#1b4023] focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 transition-colors">
                    <span>{item.question}</span>
                    <ChevronRightIcon
                      className={`${
                        open ? 'transform rotate-90' : ''
                      } w-5 h-5 text-yellow`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: 'Onde o Instituto se localiza?',
    answer:
      'Nossa Instituto atua em todo o território brasileiro, de forma online e com apresentações presenciais e em breve com uma sede física em Curitiba.',
  },
  {
    question: 'Como faço para me voluntariar?',
    answer:
      'Disponibilizamos um formulário no topo do site para entrar em contato, também temos nossas redes sociais.',
  },
  {
    question: 'Onde posso contar minha história?',
    answer:
      'Quer contar sua história e inspirar outras mulheres? Acesse o formulário no topo do nosso site! Além disso, você pode entrar em contato através dos números: (41) 9164-1633 e (41) 99830-9091, ou pelas nossas redes sociais! Mal podemos esperar para ouvir você!',
  },
];

export default Faq;
