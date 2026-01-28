# Structure de Gestion des Demandes de RV

## Vue d'ensemble

Cette structure implémente une architecture modulaire et scalable pour gérer les demandes de rendez-vous (RV) médicaux.

## Structure des répertoires

```
src/app/features/private/demande/
├── models/
│   ├── demande.model.ts      # Modèles et interfaces TypeScript
│   └── index.ts              # Exports publics
├── services/
│   ├── demande.service.ts    # Logique métier et appels API
│   └── index.ts              # Exports publics
├── list-demande/             # Composant de liste
│   ├── list-demande.component.ts
│   ├── list-demande.component.html
│   ├── list-demande.component.css
│   └── list-demande.component.spec.ts
├── demande-rv/               # Composant de création
    ├── demande-rv.component.ts
    ├── demande-rv.component.html
    ├── demande-rv.component.css
    └── demande-rv.component.spec.ts

src/app/mocks/
└── demande.mock.ts           # Données mockées pour le développement
```

## Modèles (models/demande.model.ts)

### Énumérations
- `StatutDemande`: Les états possibles d'une demande (EN_ATTENTE, ACCEPTE, REFUSE, ANNULE)

### Interfaces
- `DemandRV`: Structure d'une demande de RV
- `DemandRVResponse`: Réponse du serveur avec pagination
- `DemandRVFilter`: Critères de filtrage et pagination

## Service (services/demande.service.ts)

Le service fournit les méthodes suivantes:

### Méthodes principales
- `getDemandes(filters)`: Récupère la liste des demandes avec filtrage et pagination
- `getDemandeById(id)`: Récupère une demande spécifique
- `createDemande(demande)`: Crée une nouvelle demande
- `updateDemande(id, demande)`: Met à jour une demande
- `deleteDemande(id)`: Supprime une demande

### Gestion des mocks
Actuellement, le service utilise les données mock (MOCK_DEMANDES). Pour passer à l'API réelle:
1. Décommenter les appels `http.get()`, `http.post()`, etc.
2. Commenter les appels `of()` qui retournent les données mock
3. Configurer l'URL de base de l'API

## Mocks (mocks/demande.mock.ts)

Contient 12 demandes d'exemple avec:
- Statuts variés (EN_ATTENTE, ACCEPTE, REFUSE, ANNULE)
- Différentes spécialités (Generaliste, Cardiologue, Dermatologue)
- Informations complètes (patient, date, heure, motif, etc.)

## Composant ListDemande

### Fonctionnalités
- **Affichage dynamique**: Les demandes sont chargées depuis le service
- **Filtrage**: Par statut et par spécialité
- **Pagination**: Navigation entre les pages
- **Actions**: Voir détails, modifier, supprimer
- **Message vide**: Affichage quand aucune demande n'existe

### Propriétés du composant
- `demandes`: Tableau des demandes actuelles
- `currentPage`: Page actuelle
- `totalPages`: Nombre total de pages
- `totalItems`: Nombre total de demandes
- `filterStatus`: Filtre de statut sélectionné
- `filterSpecialite`: Filtre de spécialité sélectionné

### Méthodes
- `loadDemandes()`: Charge les demandes avec filtres appliqués
- `onPageChange(page)`: Gère le changement de page
- `onFilterStatusChange()`: Gère le changement du filtre de statut
- `onFilterSpecialiteChange()`: Gère le changement du filtre de spécialité
- `deleteDemande(id)`: Supprime une demande avec confirmation
- `formatDate(dateString)`: Formate une date en français

## Utilisation

### Dans un composant parent
```typescript
import { ListDemandeComponent } from './demande/list-demande/list-demande.component';

@Component({
  imports: [ListDemandeComponent],
  // ...
})
export class ParentComponent {}
```

### Routes (si applicable)
```typescript
{
  path: 'demandes',
  component: ListDemandeComponent
}
```

## Migration vers l'API réelle

1. **Configurer HttpClient**:
```typescript
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [HttpClientModule]
});
```

2. **Mettre à jour le service**: Décommenter les appels HTTP réels dans `demande.service.ts`

3. **Configurer l'URL de base**:
```typescript
private apiUrl = 'https://your-api.com/api/demandes';
```

## Points d'amélioration future
- [ ] Ajout de la recherche par texte
- [ ] Export des données en PDF/CSV
- [ ] Notification en temps réel des changements
- [ ] Cache des données
- [ ] Gestion des erreurs plus robuste
- [ ] Tests unitaires complets
