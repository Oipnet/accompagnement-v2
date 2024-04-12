<template>
  <h1 class="flex justify-end text-4xl text-primary font-dancing-script w-full mt-12 pr-24">Qui suis je</h1>
  <section class="flex sm:flex-row mt-[64px] flex-col-reverse">
    <UCard :ui="{
      divide: 'divide-white',
      ring: 'ring-0',
      shadow: 'shadow-none',
      base: 'sm:w-2/5 w-full m-auto',
      footer: {
        base: 'flex justify-center',
      }
    }">
      <p class="text-center text-secondary">
        Moi c'est Karen, 36 ans, je vis près de Bordeaux avec mon mari (mon pilier) et mes 3 enfants.<br><br>

        Depuis toujours, j’ai des perceptions extrasensorielles et j'ai appris à les utiliser pour accompagner
        les âmes qui en ont besoin, notamment lors de notre entrée ou sortie de ce monde.<br><br>

        Mon don accompagne également toutes les « petites morts », tous ces changements qui nous permettent
        de nous réaligner dans nos vies. Je me suis formée en Reiki, lithothérapie, radiesthésie, naturopathie,
        Doula holistique, hypnonatal, facilitatrice d’espaces sacrés, Moon Mother… ce qui est ma petite boite
        à outils cosmique.<br><br>

        Après un « arrêt naturel de grossesse », qui a donné naissance à une petite étoile, j’ai décidé d’accompagner
        mes sœurs dans les petits et grands passages de la vie des femmes, dont celui de l’enfantement mais aussi
        de la préconception et de la matrescence.<br><br>

        La spiritualité fait partie intégrante de mes accompagnements, pour être au plus juste des besoins
        des femmes, pour les aider à se reconnecter à leur puissance et empouvoirement pour être actrices et pas
        spectatrices de leur vie!
      </p>
    </UCard>
    <nuxt-img
        preload
        src="/images/karen.webp"
        alt="Karen"
        class="h-[300px] sm:rounded-full w-full sm:h-[400px] sm:w-[400px] object-cover shadow-lg m-auto hover:scale-105 transition ease-in-out"
    />
  </section>
  <section>
    <h1 class="flex justify-center text-4xl text-center sm:text-right text-primary font-dancing-script w-full mt-12 mb-10">
      Découvrir les valeurs qui m'animent
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <div class="text-center align-middle mb-4 sm:mb-0">
        <h2 class="text-primary font-dancing-script text-2xl text-center mb-8">Amour</h2>
        <p>
          Pour faire un soin, l'énergie d’amour est importante.<br><br>
          Elle permet à la personne de se sentir protégée et de pouvoir établir un lien de confiance,
          ce qui sera plus facile par la suite pour se déposer.<br><br>
          Cette valeur me semble importante dans ma communication pour transmettre cette belle énergie, donner
          envie d’en savoir plus.<br><br>
          Comprendre que cette énergie peut tout transcender quand elle est pure et vraie.
        </p>
      </div>
      <div class="flex justify-center">
        <nuxt-img src="/images/amour.webp" alt="Coeur" class="w-auto sm:w-[400px] rounded-xl" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-8">
      <div class="flex justify-center row-start-2 sm:row-auto">
        <nuxt-img src="/images/bienveillance.webp" alt="Coeur" class="w-auto sm:w-[400px] rounded-xl" />
      </div>
      <div class="text-center align-middle">
        <h2 class="text-primary font-dancing-script text-2xl text-center mb-8">Bienveillance</h2>
        <p>
          La bienveillance est aussi un des piliers pour accompagner les femmes.<br><br>

          On ne peut pas se permettre d’être dans le jugement ou la critique.<br><br>

          On doit pouvoir écouter de façon bienveillante et d’ailleurs mes réponses doivent l’être tout autant.
          Pour moi, la bienveillance est l’un des piliers les plus importants des thérapeutes.<br><br>

          De même pour la communication, nos réponses doivent rester bienveillantes (quelque soit notre point de vue).<br><br>

          Notre travail n’est pas le choix que fait le patient mais bien de lui montrer le champs des possibles afin qu’il puisse faire son choix/ ou ses choix.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-8">
      <div class="text-center align-middle">
        <h2 class="text-primary font-dancing-script text-2xl text-center mb-8">Sacré</h2>
        <p>
          Pour moi le sacré est aussi une valeur qui a du sens.<br><br>

          Il me permet de moi me retrouver via des petits rituels (d’ancrage ou autre) et d’apporter de la magie
          dans la vie.<br><br>

          D’avoir confiance en l’univers !<br><br>

          Et c’est aussi ces valeurs de magie et de rituels que je transmet en tant que thérapeute pour que les
          patient(e)s/ client(e)s croient à nouveau en la vie, à la magie et se retrouvent.<br><br>

          Transmettre le sacré dans les communications, c’est comme transmettre la magie qui m’inspire.
        </p>
      </div>
      <div class="flex justify-center mt-4 sm:mt-0">
        <nuxt-img src="/images/sacre.webp" alt="Coeur" class="h-[600px] w-auto sm:w-[400px] m-auto rounded-xl" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-8">
      <div class="flex justify-center row-start-2 sm:row-auto mt-4 sm:mt-0">
        <nuxt-img src="/images/harmonie.webp" alt="Coeur" class="w-auto sm:w-[400px] rounded-xl" />
      </div>
      <div class="text-center align-middle">
        <h2 class="text-primary font-dancing-script text-2xl text-center mb-8">Harmonie</h2>
        <p>
          L’harmonie, c’est la capacité de comprendre que nous faisons partie d’un grand tout.<br><br>

          C’est aussi le fait d’être alignée à faire ce en quoi je crois et ce qui me fait vibrer.<br><br>

          Et c’est aussi quelque chose que je veux transmettre dans mes soins (l’harmonie avec nous même, l’harmonie
          avec notre planète et les éléments, l’harmonie avec notre univers…). Si tout le monde faisait ce qui les
          fait vibrer, les gens seraient en harmonie avec eux mêmes.<br><br>

          En énergétique on ressent bien l’importance de l’harmonisation dans le corps afin de ne pas
          avoir de coupure et que les choses soient fluides !!!<br><br>

          En harmonisant on retrouve la fluidité.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-8">
      <div class="text-center align-middle">
        <h2 class="text-primary font-dancing-script text-2xl text-center mb-8">Espoir ou respect/tolérance</h2>
        <p>
          Alors ici le choix a été difficile.<br><br>

          Ces 3 valeurs sont assez proches des autres valeurs que j’ai déjà choisies mais avec quelques variances
          quand même.<br><br>

          Au final je vais choisir le respect.<br><br>

          Le respect est une valeur fondamentale pour l’accompagnement des personnes.<br><br>

          On doit être dans le non-jugement et on doit profondément respecter chaque personne (que ça ait été
          ses choix de vie, que cela soit dans ses choix actuels ou dans ceux qu’elle va choisir plus tard). On
          peut amener notre vision, offrir une panoplie de choix mais toujours laisser le libre-arbitre et surtout
          respecter leur choix.<br><br>

          Mais aussi les accompagner dans leur décision avec respect et bienveillance.<br><br>

          Pour la communication, c’est pareil, le respect est fondamental.<br><br>

          On peut ne pas être en accord, ne pas avoir les mêmes croyances mais on doit le respecter.<br><br>

          On peut amener à voir un point de vue sans jamais forcer.<br><br>

          Le respect est une valeur qui fait sens pour moi que ce soit dans des accompagnements comme dans ma
          rigueur personnel et elle a même été un des piliers lors de mes années dans l’armée.
        </p>
      </div>
      <div class="flex justify-center mt-4 sm:mt-0">
        <nuxt-img src="/images/espoir.webp" alt="Coeur" class="h-[600px] w-auto sm:w-[400px] rounded-xl" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>