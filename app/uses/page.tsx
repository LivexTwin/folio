import { uses } from "data/uses";

export default function UsesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Uses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(uses).map(([category, items]) => (
          <div key={category} className="space-y-4">
            {/* Main category name */}
            <h2 className="text-2xl font-semibold capitalize">{category}</h2>

            {/* Loop through items under each category */}
            {(
              items as Array<{
                id: number;
                name: string;
                subcategory?: string;
                extraInfo?: any;
              }>
            ).map((item) => (
              <div key={item.id} className="space-y-4">
                {/* Display name or subcategory */}
                <h3 className="text-xl font-medium">
                  {item.subcategory || item.name}
                </h3>

                {/* Display extra info */}
                {item.extraInfo?.map((info, idx) => (
                  <div key={idx} className="space-y-2">
                    {/* Label and Details */}
                    {info.label && (
                      <h4 className="text-lg font-semibold">{info.label}</h4>
                    )}
                    <ul>
                      {info.content.map((content, contentIdx) => (
                        <li
                          className="text-neutral-700 dark:text-neutral-400"
                          key={contentIdx}
                        >
                          {content}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
