import { Injectable } from '@angular/core';
import { Article} from "../models/article.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [
    {
      title: 'Artigo Principal',
      imageUrl: 'https://img.freepik.com/free-photo/green-leaf-texture-leaf-texture-background_501050-120.jpg?size=626&ext=jpg&ga=GA1.1.922576754.1726739498&semt=ais_hybrid',
      summary:   'Resumo do artigo principal. Este é o artigo mais importante do blog, fornecendo insights profundos sobre o tópico principal.',
      link: '/artigo/1',
      id: 1,
      content: `
        ## Artigo Principal

        Este é o conteúdo completo do artigo principal. Aqui você pode adicionar todo o texto, imagens e outros elementos que compõem o artigo.

        **Pontos principais:**
        - Insight 1
        - Insight 2
        - Insight 3

        *Conclusão:* Este artigo fornece uma visão abrangente sobre o tópico principal, oferecendo aos leitores informações valiosas e detalhadas.
      `,
    },
    {
      title: 'Artigo Sec 1',
      imageUrl: 'https://img.freepik.com/free-photo/tropical-green-leaves-background_53876-88891.jpg?w=826&t=st=1726746278~exp=1726746878~hmac=09b029811f18141f2ed3fff13ead09e2fec50e1576b3a58e8faa32e8c74af37b',
      summary: 'Resumo do artigo sec 1.',
      link: '/artigo/2',
      id: 2,
      content: `
        ## Artigo Sec 1

        Conteúdo completo do artigo secundário 1. Este artigo explora aspectos complementares e fornece uma perspectiva adicional sobre o tema principal.

        **Pontos abordados:**
        - Aspecto 1
        - Aspecto 2
        - Aspecto 3

        *Conclusão:* Este artigo enriquece o entendimento do tema principal, oferecendo insights adicionais e detalhados.
      `,
    },
    {
      title: 'Artigo Sec 2',
      imageUrl: 'https://img.freepik.com/free-photo/close-up-green-cigar-flower-leaves_53876-146915.jpg?w=826&t=st=1726746494~exp=1726747094~hmac=b42c063ab1c4c7527a990b9febf02f202fa0cf66dedc8596fb1708d48317fc78',
      summary: 'Resumo do artigo sec 2.',
      link: '/artigo/3',
      id: 3,
      content: `
        ## Artigo Sec 2

        Conteúdo completo do artigo sec 2. Este artigo apresenta diferentes perspectivas e análises aprofundadas sobre o tópico em questão.

        **Tópicos discutidos:**
        - Perspectiva A
        - Perspectiva B
        - Perspectiva C

        *Conclusão:* Este artigo oferece uma análise detalhada, proporcionando aos leitores uma compreensão mais profunda do tópico.
      `,
    },
    {
      title: 'Artigo Sec 3',
      imageUrl: 'https://img.freepik.com/free-photo/beautiful-closeup-shot-green-banana-leaf_181624-1952.jpg?w=826&t=st=1726746532~exp=1726747132~hmac=b5d00e0fbea9cf0a05e06064d5b52f13cb60d93d223db8ca422c9a1e9025fd96',
      summary: 'Resumo do artigo sec 3.',
      link: '/artigo/4',
      id: 4,
      content: `
        ## Artigo Sec 3

        Conteúdo completo do artigo sec 3. Este artigo conclui a série de artigos, oferecendo considerações finais e reflexões sobre o tema abordado.

        **Principais reflexões:**
        - Reflexão 1
        - Reflexão 2
        - Reflexão 3

        *Conclusão:* Este artigo sintetiza os pontos discutidos anteriormente, proporcionando uma conclusão coesa e abrangente.
      `,
    },
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find((article) => article.id === id);
  }


  constructor() { }
}
