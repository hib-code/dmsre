"use client";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/Hero";
import { useTheme } from "next-themes";  
import { Sun, Moon } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import KommunicateChat from "@/components/KommunicateChat";
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Telecharger() {
  const [arch, setArch] = useState("linux");
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  if (!mounted) return null; 

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <main className="text-center py-60 ">
        <h2 className="text-3xl font-bold mt-6">
          choisisser  <span className="text-blue-400">votre</span> DMS
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6 px-4 max-w-5xl mx-auto">
          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <img src="/images/system/application.png" alt="logoapp" className="mx-auto w-16"  />
            <h3 className="text-lg font-bold mt-4 text-gray-900 dark:text-white">Installer application</h3>
            <ul className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              <li>✔ Surveillance complète du système</li>
              <li>✔ Accès direct au matériel pour des performances optimales</li>
              <li>✔ Noyau DMS personnalisé pour une gestion fluide</li>
            </ul>
            <p className="text-xs mt-3 text-gray-500 dark:text-gray-400">Idéale pour une gestion en temps réel des ressources système, assurant des performances de haut niveau.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700">Recommended</button>
          </div>
          <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
            <img src="/images/system/application.png" alt="script dms" className="mx-auto w-16"  />
            <h3 className="text-lg font-bold mt-4 text-gray-900 dark:text-white">Installer script</h3>
            <ul className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            <li>✔ Détection automatique de l’environnement cible</li>
            <li>✔ Téléchargement conditionnel des dépendances manquantes</li>
            <li>✔ Configuration silencieuse sans intervention utilisateur</li>
            <li>✔ Journalisation complète pour audit et débogage</li>
            <li>✔ Moins intuitif pour les utilisateurs non techniques</li>
            <li>✔ Requiert des droits administrateur</li>
            </ul>
            <p className="text-xs mt-3 text-gray-500 dark:text-gray-400">Pour une installation DMS sécurisée, garantissant la protection des données sans altérer le système d'exploitation principal.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700">Recommended</button>
          </div>
        </div>
      </main>

      <div className="text-center p-9 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mt-0">Dervox Monitor Server</h1>

        {/* OS Selection Buttons */}
        <div className="flex items-center justify-center mt-3 border rounded-lg p-1 bg-gray-800 w-43">
          <button
            onClick={() => setArch("linux")}
            className={`px-4 py-1 text-sm rounded-lg ${arch === "linux" ? "bg-blue-500 text-white" : "bg-transparent text-gray-400"}`}
          >
            Linux
          </button>
          <button
            onClick={() => setArch("windows")}
            className={`px-4 py-1 text-sm rounded-lg ${arch === "windows" ? "bg-blue-500 text-white" : "bg-transparent text-gray-400"}`}
          >
            Windows
          </button>
        </div>

        <div className="flex space-x-6 mt-10">
          {arch === "windows" && (
            <>
              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">recommandé</span>
                    <img src="/images/system/windows-11-icon-seeklogo.png" alt="Windows" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Windows 64bits</h2>
                    <p className="text-gray-400 mt-2">CDervox Monitor Server analyse en temps réel l'utilisation du CPU, RAM, disque et réseau sur les serveurs Windows 2022 avec alertes automatisées.
                    </p>
                    <div className="flex space-x-4 mt-4">
                    <a
                      href="/dmsx64/DERVOX_Monitor_Server.exe"
                      download
                      className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Download size={20} />
                      <span>Télécharger</span>
                    </a>
                      <a
                        href="http://localhost:3001"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                          <FileText size={20} />
                          <span>Documentation</span>
                        </Button>
                      </a>

                      
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">Bientot</span>
                    <img src="/images/system/windows-11-icon-seeklogo.png" alt="Windows" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Windows 32bits</h2>
                    <p className="text-gray-400 mt-2">Application de supervision complète pour Windows 32bits, incluant graphiques système, logs d’activité et surveillance à distance.</p>
                    <div className="flex space-x-4 mt-4">
                      <Button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        <Download size={20} />
                        <span>Telecharger</span>
                      </Button>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {arch === "linux" && (
            <>
              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">recommandé</span>
                    <img src="/images/system/arch-linux-seeklogo.png" alt="Kali Linux" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Arch Linux</h2>
                    <p className="text-gray-400 mt-2"> Dervox Monitor Server fonctionne en arrière-plan pour surveiller les processus système, les performances du noyau et la mémoire sur Arch Linux.</p>
                    <div className="flex space-x-4 mt-4">
                    <a
                      href="/dmsx64/DERVOX_Monitor_Server.exe"
                      download
                      className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Download size={20} />
                      <span>Télécharger</span>
                    </a>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">recommandé</span>
                    <img src="/images/system/debian-seeklogo.png" alt="Kali Linux" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Debian Linux</h2>
                    <p className="text-gray-400 mt-2">Application légère et sécurisée pour Debian, avec tableau de bord web pour visualiser l'état du serveur en temps réel.</p>
                    <div className="flex space-x-4 mt-4">
                    <a
                      href="/dmsx64/DERVOX_Monitor_Server.exe"
                      download
                      className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Download size={20} />
                      <span>Télécharger</span>
                    </a>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>



        {/*script*/}
      </div>
      <div className="text-center p-9 max-w-6x2 mx-auto">
        <h1 className="text-3xl font-bold mt-0">Script Dervox Monitor Server</h1>
        <div className="flex items-center justify-center mt-3 border rounded-lg p-1 bg-gray-800 w-43">
          <button
            onClick={() => setArch("linux")}
            className={`px-4 py-1 text-sm rounded-lg ${arch === "linux" ? "bg-blue-500 text-white" : "bg-transparent text-gray-400"}`}
          >
            Linux
          </button>
          <button
            onClick={() => setArch("windows")}
            className={`px-4 py-1 text-sm rounded-lg ${arch === "windows" ? "bg-blue-500 text-white" : "bg-transparent text-gray-400"}`}
          >
            Windows 
          </button>
          <button
            onClick={() => setArch("cloud")}
            className={`px-4 py-1 text-sm rounded-lg ${arch === "cloud" ? "bg-blue-500 text-white" : "bg-transparent text-gray-400"}`}
          >
            cloud
          </button>
          
        </div>

        <div className="flex space-x-6 mt-10">
          {arch === "windows" && (
            <>
              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">recommandé</span>
                    <img src="/images/system/windows-11-icon-seeklogo.png" alt="Windows" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Windows Server 2022</h2>
                    <p className="text-gray-400 mt-2">Le script Dervox configure automatiquement les services essentiels et installe le système de surveillance en arrière-plan.</p>
                    <div className="flex space-x-4 mt-4">
                   <a
                     href="/mees.exe"
                      download
                      className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Download size={20} />
                      <span>Télécharger</span>
                    </a>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">recommandé</span>
                    <img src="/images/system/windows-11-icon-seeklogo.png" alt="Windows" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Windows Server 2019</h2>
                    <p className="text-gray-400 mt-2"> Script simplifié pour déployer Dervox sur Windows 2019 avec surveillance système et journalisation.</p>
                    <div className="flex space-x-4 mt-4">
                    <a
                      href="/mees.exe"
                      download
                      className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Download size={20} />
                      <span>Télécharger</span>
                    </a>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">Bientot</span>
                    <img src="/images/system/windows-11-icon-seeklogo.png" alt="Windows" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Windows Server 2003</h2>
                    <p className="text-gray-400 mt-2">Ancien système pris en charge avec un script adapté pour installer Dervox de façon minimale.</p>
                    <div className="flex space-x-4 mt-4">
                    <a
                      href="/mees.exe"
                      download
                      className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Download size={20} />
                      <span>Télécharger</span>
                    </a>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {arch === "linux" && (
            <>
              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">recommandé</span>
                    <img src="/images/system/arch-linux-seeklogo.png" alt="Kali Linux" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Arch Linux</h2>
                    <p className="text-gray-400 mt-2">Script bash pour Arch Linux incluant installation du noyau Dervox et services d'analyse système.</p>
                    <div className="flex space-x-4 mt-4">
                    <a
                      href="/mees.exe"
                      download
                      className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Download size={20} />
                      <span>Télécharger</span>
                    </a>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">recommandé</span>
                    <img src="/images/system/debian-seeklogo.png" alt="Kali Linux" className="w-24 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Debian Linux</h2>
                    <p className="text-gray-400 mt-2">  Déploiement automatique du script Dervox sur Debian, avec configuration réseau, firewall et services système.</p>
                    <div className="flex space-x-4 mt-4">
                    <a
                      href="/mees.exe"
                      download
                      className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Download size={20} />
                      <span>Télécharger</span>
                    </a>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
          {arch === "cloud" && (
            <>
              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">Bientot</span>
                    <img src="/images/system/aws.png" alt="awsamazon" className="w-22 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">AWS Amazon</h2>
                    <p className="text-gray-400 mt-2">Le script DMS est déployé sur Azure et configure la collecte système sans intervention.</p>
                    <div className="flex space-x-4 mt-4">
                      <Button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        <Download size={20} />
                        <span>Telecharger</span>
                      </Button>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">Bientot</span>
                    <img src="/images/system/azuers.png" alt="Azur" className="w-28 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Microsoft Azure</h2>
                    <p className="text-gray-400 mt-2">Le script est installé dans l’environnement Google Cloud pour lancer la supervision DMS.</p>
                    <div className="flex space-x-4 mt-4">
                      <Button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        <Download size={20} />
                        <span>Telecharger</span>
                      </Button>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 text-center p-6 border rounded-2xl shadow-lg flex-1">
                <CardContent>
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -top-5 bg-blue-600 text-white px-3 py-1 rounded-lg">Bientot</span>
                    <img src="/images/system/googlecloud.png" alt="google" className="w-28 h-24 my-4" />
                    <h2 className="text-xl font-semibold text-purple-400">Google cloud</h2>
                    <p className="text-gray-400 mt-2">Le script DMS s’installe automatiquement sur les serveurs AWS pour activer la surveillance.</p>
                    <div className="flex space-x-4 mt-4">
                      <Button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        <Download size={20} />
                        <span>Telecharger</span>
                      </Button>
                      <Button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <FileText size={20} />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
        
      </div>
    </div>
  );
}
