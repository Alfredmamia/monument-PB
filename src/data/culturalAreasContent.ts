/**
 * Contenu expert — Objets d'art et artefacts rituels des 4 aires culturelles du Cameroun.
 * Rédigé à partir de sources ethnographiques (musée du Quai Branly - Jacques Chirac, galeries
 * spécialisées en art tribal, littérature de Louis Perrois sur l'art Fang). Voir
 * DOSSIER-SOURCING-CONTENU.md pour le détail des références.
 *
 * NOTE ÉDITORIALE : ce contenu décrit des traditions artistiques et cultuelles à but pédagogique
 * et patrimonial. Les pratiques rituelles historiques sont présentées au passé, dans une démarche
 * ethnographique et non prescriptive.
 */

export interface CulturalAreaSection {
  title: string;
  body: string;
}

export interface CulturalAreaDetail {
  id: string;
  name: string;
  subtitle: string;
  intro: string;
  sections: CulturalAreaSection[];
  sources: string;
}

export const culturalAreaDetails: Record<string, CulturalAreaDetail> = {
  grassfield: {
    id: 'grassfield',
    name: 'Aire Culturelle Grassfields',
    subtitle: 'Hauts plateaux de l\'Ouest et du Nord-Ouest — royaumes Bamiléké et Bamoun',
    intro: 'Les Grassfields camerounais forment une mosaïque d\'une centaine de royaumes et chefferies (dont le royaume Bamoun, fondé à Foumban, et les multiples chefferies Bamiléké) organisés autour de la figure du Fon — le roi-chef, à la fois autorité politique, spirituelle et gardien de la mémoire lignagère. L\'art y est indissociable du pouvoir : chaque objet de prestige existe pour rendre visible et légitimer l\'autorité royale.',
    sections: [
      {
        title: 'Les trônes royaux perlés',
        body: 'Le trône constitue la pièce maîtresse du trésor de tout Fon. Sculpté dans un bois dur puis entièrement recouvert de perles de verre enfilées sur des fibres végétales, il n\'a jamais de fonction utilitaire : c\'est un régalia, un symbole de souveraineté exposé lors des intronisations et des visites de dignitaires. Les motifs perlés récurrents — serpent bicéphale, araignée, léopard, buffle — renvoient chacun à un attribut du pouvoir royal (l\'ubiquité, la sagesse occulte, la force). Les perles elles-mêmes, importées historiquement via les routes commerciales transsahariennes puis atlantiques, étaient un bien rare et donc un marqueur de richesse.'
      },
      {
        title: 'Les masques rituels des sociétés secrètes',
        body: 'Les masques Grassfields ne se portent jamais librement : leur usage est strictement contrôlé par des sociétés secrètes régulatrices (telle la Kwifoyn chez les Bamiléké), chargées de veiller sur l\'ordre social et d\'assister le Fon. Le masque d\'éléphant (souvent désigné mbap mteng), à base de vannerie tressée recouverte de tissu perlé, et le masque de buffle comptent parmi les plus prestigieux : seuls les notables de haut rang étaient autorisés à les danser, lors des cérémonies funéraires royales ou des grandes fêtes comme le Nguon chez les Bamoun. Le port du masque n\'est pas une simple parure : il opère une transformation rituelle du danseur, qui incarne alors une force ancestrale ou animale.'
      },
      {
        title: 'Le bronze à la cire perdue',
        body: 'Les fondeurs Bamoun et Bamiléké maîtrisaient la technique de la fonte à la cire perdue pour produire des pipes cérémonielles, des bracelets, des statues commémoratives et des objets de régalia en laiton ou en bronze. Ces pièces, moins connues que les bronzes d\'Ifé mais tout aussi virtuoses, ornaient les palais et servaient d\'offrandes diplomatiques entre royaumes alliés. Les pipes à long tuyau, réservées aux chefs et dignitaires, étaient utilisées lors des conseils pour affirmer l\'autorité de leur détenteur.'
      },
      {
        title: 'Le tissage Ndop',
        body: 'Le tissu Ndop — coton teint à l\'indigo par la technique de la réserve (ficelage puis teinture, laissant apparaître des motifs géométriques blancs sur fond bleu profond) — habillait exclusivement la royauté et les dignitaires lors des grandes cérémonies. Sa production, réservée à des ateliers spécialisés, en faisait un tissu de prestige au même titre que les perles ou le bronze.'
      }
    ],
    sources: 'Sources : Musée du Quai Branly - Jacques Chirac ; galeries spécialisées en art tribal camerounais (art-africain-traditionnel.com, Bruno Mignot, Passé Simple).'
  },

  sawa: {
    id: 'sawa',
    name: 'Aire Culturelle Sawa',
    subtitle: 'Littoral et zones fluviales — peuples Douala, Bakweri, Bassa et apparentés',
    intro: 'Les peuples Sawa (« gens de l\'eau ») occupent le littoral atlantique et les estuaires du Wouri et du Sanaga. Leur culture matérielle tout entière s\'organise autour du rapport à l\'eau : navigation, pêche, et un univers spirituel peuplé d\'esprits aquatiques (les Miengu, ou Jengu au singulier) considérés comme des intermédiaires entre les vivants et le monde invisible.',
    sections: [
      {
        title: 'Les pirogues de cérémonie',
        body: 'La pirogue monoxyle (taillée dans un seul tronc) est bien plus qu\'un outil de pêche : lors du Ngondo, la grande fête traditionnelle annuelle des peuples Sawa célébrée sur les rives du Wouri, des pirogues de course richement décorées et nommées s\'affrontent lors de régates rituelles. Chaque équipage rend hommage aux esprits de l\'eau avant la course, dans une cérémonie où se mêlent compétition sportive et communication avec le monde invisible.'
      },
      {
        title: 'L\'habitat lacustre et l\'architecture sur pilotis',
        body: 'Dans les zones de mangrove et les estuaires, les habitations traditionnelles sur pilotis, construites en bois et raphia, s\'élèvent au-dessus du niveau des marées. Cette architecture adaptative témoigne d\'une maîtrise ancienne des contraintes du milieu amphibie, et structurait historiquement des villages lacustres entiers.'
      },
      {
        title: 'La vannerie et les instruments de pêche',
        body: 'La vannerie tressée (raphia, rotin) produisait aussi bien des nasses et pièges à poissons que des paniers de transport et des cloisons d\'habitation. Les techniques de pêche traditionnelles — nasses conique, filets tissés à la main, épuisettes — constituent un savoir-faire technique transmis de génération en génération, indissociable de l\'identité Sawa.'
      },
      {
        title: 'Les masques aquatiques et le culte du Jengu',
        body: 'Le culte du Jengu (ou Miengu au pluriel), esprit-génie des eaux, occupe une place centrale dans la cosmologie Sawa : mi-humain mi-aquatique, il est invoqué pour la protection, la guérison et la prospérité. Les masques et effigies liés à ce culte, souvent ornés de motifs évoquant les écailles ou la sirène, étaient utilisés lors de cérémonies propitiatoires précédant les grandes sorties en mer ou les régates du Ngondo.'
      }
    ],
    sources: 'Sources : ethnographie des peuples Sawa du littoral camerounais ; traditions documentées du festival Ngondo (Douala).'
  },

  fangbeti: {
    id: 'fangbeti',
    name: 'Aire Culturelle Fang-Beti',
    subtitle: 'Centre-Sud forestier — peuples Fang, Beti, Boulou, Ewondo',
    intro: 'Les peuples de la grande forêt du Centre-Sud camerounais (Fang, Beti, Boulou, Ewondo et groupes apparentés) partagent une organisation patrilinéaire en clans et lignages, structurée autour d\'un élément cultuel central : le byeri, le culte des ancêtres. C\'est de cette tradition qu\'est issu l\'un des corpus les plus étudiés et les plus influents de toute la statuaire africaine.',
    sections: [
      {
        title: 'Les gardiens de reliquaire (eyema-byeri)',
        body: 'Chaque famille conservait les crânes et ossements de ses ancêtres les plus importants dans une boîte-reliquaire en écorce (le nsekh byeri), gardée par le doyen du lignage. Cette boîte était surmontée d\'une statue ou d\'une tête sculptée en bois — le gardien de reliquaire, ou eyema-byeri — dont la fonction était de protéger les reliques des profanateurs et de servir de vecteur de médiation entre les vivants et les ancêtres. Assis, les mains jointes au niveau du nombril en signe d\'hérédité, le visage au front bombé et à l\'expression impassible, ces figures étaient sorties de l\'ombre lors des rituels d\'initiation pour être présentées aux jeunes gens. Leur puissance formelle a marqué l\'histoire de l\'art occidental : ce sont des œuvres de ce type qui, découvertes au tout début du XXe siècle, ont influencé des artistes européens en quête de nouvelles grammaires visuelles.'
      },
      {
        title: 'Le Mvet, épopée et instrument sacré',
        body: 'Le Mvet désigne à la fois un instrument de musique — une harpe-cithare à résonateurs de calebasses — et le genre épique qui l\'accompagne : de longs récits chantés, mi-parlés mi-chantés, relatant les exploits de héros légendaires et la cosmogonie des peuples Fang-Beti. Le mvettiste, dépositaire d\'un savoir initiatique, était une figure respectée capable de tenir en haleine tout un village durant une veillée entière.'
      },
      {
        title: 'Le balafon et les tambours cérémoniels',
        body: 'Le balafon (xylophone à résonateurs de calebasses) rythmait les grandes cérémonies collectives, danses et rassemblements. Les tambours à fente ou à membrane, taillés dans des troncs évidés, servaient à la fois d\'instruments de musique rituelle et de moyen de communication à longue distance entre villages — un usage documenté dans de nombreuses sociétés forestières d\'Afrique centrale.'
      },
      {
        title: 'Masques et objets des sociétés initiatiques',
        body: 'Au-delà du culte du byeri, plusieurs sociétés initiatiques (dont la société dite « So ») encadraient le passage à l\'âge adulte des jeunes hommes. Les masques cérémoniels associés à ces rites, souvent peints en blanc (kaolin) pour évoquer le monde des esprits et des défunts, apparaissaient lors de ces cérémonies de passage, renforçant la cohésion sociale et la transmission des savoirs ancestraux.'
      }
    ],
    sources: 'Sources : Louis Perrois, Byéri Fang, Sculptures d\'Ancêtres en Afrique (catalogue d\'exposition, Marseille, 1992) ; Musée du Quai Branly - Jacques Chirac ; Günter Tessmann, Die Pangwe (1913).'
  },

  soudano: {
    id: 'soudano',
    name: 'Aire Culturelle Soudano-Sahélienne',
    subtitle: 'Grand Nord — Lamidats peuls (Foulbé), royaumes Kotoko et Mandara',
    intro: 'Le Grand Nord camerounais s\'inscrit dans l\'aire culturelle soudano-sahélienne, marquée par des siècles d\'échanges transsahariens et par l\'implantation de l\'islam à partir du XIXe siècle avec les conquêtes peules (Foulbé). La région est structurée en Lamidats — chefferies traditionnelles dirigées par un Lamido — dont les plus connus sont ceux de Rey Bouba, Garoua ou Ngaoundéré, aux côtés des royaumes Kotoko et Mandara plus anciens.',
    sections: [
      {
        title: 'Les tenues d\'apparat brodées',
        body: 'Le grand boubou, ample tunique brodée portée par les Lamido et leurs dignitaires, témoigne d\'un raffinement textile hérité des routes commerciales sahariennes. Les broderies géométriques, réalisées à la main autour de l\'encolure et sur le devant du vêtement, suivent des motifs codifiés transmis par des maîtres-brodeurs, et le degré d\'ornementation signale le rang social de celui qui le porte.'
      },
      {
        title: 'Les instruments à cordes et l\'art oratoire',
        body: 'Les griots et musiciens de cour utilisaient des instruments à cordes tels que le molo (luth) et le goge (vièle monocorde) pour accompagner les louanges dynastiques et les récits historiques des lignages régnants — une fonction de mémoire orale comparable, dans son rôle social, au Mvet des Fang-Beti, mais ancrée dans une esthétique musicale d\'influence sahélienne.'
      },
      {
        title: 'Les régalia et sièges d\'autorité des Lamido',
        body: 'Le pouvoir du Lamido s\'exprime à travers des objets d\'apparat spécifiques : selles et harnachements ouvragés pour les chevaux (l\'art équestre étant central dans cette culture, contrairement aux Grassfields), sabres cérémoniels, et sièges d\'autorité en bois et cuir, distincts par leur sobriété des trônes perlés du Grassfields — reflet d\'une esthétique du pouvoir influencée par les codes vestimentaires et matériels du monde islamique sahélien.'
      },
      {
        title: 'Chapeaux coniques, arcs et carquois',
        body: 'Le chapeau conique tressé, porté aussi bien par les éleveurs peuls que par les chasseurs des royaumes Kotoko et Mandara, protège efficacement du soleil sahélien. Arcs, flèches et carquois ornementés, hérités d\'une tradition guerrière et cynégétique ancienne, complètent cette panoplie matérielle, aujourd\'hui conservée comme patrimoine cérémoniel plus que comme arme d\'usage.'
      }
    ],
    sources: 'Sources : ethnographie des Lamidats du Nord-Cameroun ; traditions documentées des royaumes Kotoko et Mandara.'
  }
};
